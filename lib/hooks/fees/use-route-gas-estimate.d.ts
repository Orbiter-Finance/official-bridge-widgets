import { RouteResultDto } from '../../service/models/route.model';
export interface RouteGasEstimateData {
    success: boolean;
    needsRefreshAfterApprove?: boolean;
    insufficientGas?: boolean;
    estimates: {
        limit: number;
        chainId: string;
    }[];
}
export declare const useRouteGasEstimate: (route: RouteResultDto | null) => import('@tanstack/react-query').UseQueryResult<RouteGasEstimateData | null, Error>;
