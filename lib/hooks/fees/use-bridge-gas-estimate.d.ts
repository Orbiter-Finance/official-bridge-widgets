import { RouteResultDto } from '../../service/models/route.model';
export declare const useBridgeGasEstimate: () => import('@tanstack/react-query').UseQueryResult<number | null, Error>;
export declare const useBridgeGasEstimateForRoute: (route: RouteResultDto | null) => import('@tanstack/react-query').UseQueryResult<number | null, Error>;
export declare const useBridgeGasEstimateData: () => import('@tanstack/react-query').UseQueryResult<import('./use-route-gas-estimate').RouteGasEstimateData | null, Error>;
export declare const useBridgeGasEstimateStatus: () => {
    isFetching: boolean;
    data: boolean | undefined;
};
export declare const useBridgeGasEstimateStatusForRoute: (route: RouteResultDto | null) => {
    isFetching: boolean;
    data: boolean | undefined;
};
