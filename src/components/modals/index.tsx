import { useRef } from 'react'
import { ConfirmationModal } from './ConfirmationModal'
import { TokenSelectModal } from './TokenSelectModal'
import { TransactionDetailsModal } from './TransactionDetailsModal'

export const Modals = () => {
  const containerRef = useRef<Element>(null)

  return (
    <div
      ref={e => {
        containerRef.current = e
      }}>
      <ConfirmationModal container={containerRef.current} />
      <TokenSelectModal container={containerRef.current} />
      <TransactionDetailsModal container={containerRef.current} />
    </div>
  )
}
