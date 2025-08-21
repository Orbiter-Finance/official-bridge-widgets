import { ReactNode, useEffect } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Axios, { AxiosResponse } from 'axios'

import { mapBusinessErrorCode } from '@/utils/error/error-codes'
import { handleError } from '@/utils/error/error-handler'
import { BridgeConfig } from '@/types'
import { BASE_URLS } from '../consts'

// API response interface
export interface ApiResponseData<T = any> {
  code: number
  message?: string
  data?: T
}

// Create a global axios instance

export const api = Axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add response interceptor for unified error handling
api.interceptors.response.use(
  (response: AxiosResponse<ApiResponseData>) => {
    const { data } = response

    // Check if response has business error code (code !== 0)
    if (data && typeof data.code === 'number' && data.code !== 0) {
      // Create error object for business error
      const businessError = new Error(data.message || 'Business error occurred')
      ;(businessError as any).response = {
        data: {
          code: data.code,
          message: data.message
        },
        status: 200 // HTTP status is 200, but business code indicates error
      }

      // Map business error code to existing error code and handle
      const mappedErrorCode = mapBusinessErrorCode(data.code)
      handleError(businessError, mappedErrorCode, data.message)

      return Promise.reject(businessError)
    }

    return response
  },
  error => {
    // Use unified error handling system for HTTP errors
    handleError(error)

    return Promise.reject(error)
  }
)
export type ApiResponse<T> = Promise<AxiosResponse<T>>

// Create a react-query client with error handling configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 1000 * 60 // 1 minute
    },
    mutations: {
      retry: 0
    }
  }
})

function setAxiosConfig(projectId: BridgeConfig['projectId'], network: BridgeConfig['network'] = 'testnet') {
  api.defaults.baseURL = BASE_URLS[network]

  api.interceptors.request.use(
    config => {
      config.headers.projectId = projectId

      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
}

// Provider component wrapper for React Query
export function QueryProvider({
  children,
  projectId,
  network
}: {
  children: ReactNode
  projectId: BridgeConfig['projectId']
  network?: BridgeConfig['network']
}) {
  setAxiosConfig(projectId, network)

  useEffect(() => {
    setAxiosConfig(projectId, network)
  }, [projectId, network])

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
