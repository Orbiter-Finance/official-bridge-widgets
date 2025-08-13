import { useSelectedBridgeRoute } from '../routes/use-bridge-route';
import { Period } from '../../utils/get-period';
export declare const useApproxTotalBridgeTimeForRoute: (route: ReturnType<typeof useSelectedBridgeRoute>) => {
    isLoading: boolean;
    data: Period;
};
export declare const useApproxTotalBridgeTime: () => {
    isLoading: boolean;
    data: Period;
};
export declare const useApproxTotalBridgeTimeTextForRoute: (route: ReturnType<typeof useSelectedBridgeRoute>) => {
    isLoading: boolean;
    data: null;
} | {
    data: string;
    isLoading: boolean;
};
export declare const useApproxTotalBridgeTimeText: () => {
    isLoading: boolean;
    data: null;
} | {
    data: string;
    isLoading: boolean;
};
