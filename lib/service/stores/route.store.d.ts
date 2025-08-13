import { RouteProvider } from '../../common/consts/route-provider';
export declare const selectedRouteAtom: import('jotai').PrimitiveAtom<RouteProvider | null> & {
    init: RouteProvider | null;
};
export declare const useSelectedRoute: () => RouteProvider | null;
export declare const useSetSelectedRoute: () => (args_0: RouteProvider | ((prev: RouteProvider | null) => RouteProvider | null) | null) => void;
