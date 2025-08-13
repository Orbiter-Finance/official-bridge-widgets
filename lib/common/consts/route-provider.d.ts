export type RouteProvider = (typeof RouteProvider)[keyof typeof RouteProvider];
export declare const RouteProvider: {
    readonly EniDeposit: "EniDeposit";
    readonly EniWithdrawal: "EniWithdrawal";
    readonly EniForcedWithdrawal: "EniForcedWithdrawal";
    readonly EniInterop: "EniInterop";
    readonly NERODeposit: "NERODeposit";
    readonly NEROWithdrawal: "NEROWithdrawal";
    readonly NEROForcedWithdrawal: "NEROForcedWithdrawal";
    readonly NEROInterop: "NEROInterop";
    readonly Orbiter: "Orbiter";
};
export declare const providerNames: {
    EniDeposit: string;
    EniWithdrawal: string;
    EniForcedWithdrawal: string;
    EniInterop: string;
    NERODeposit: string;
    NEROWithdrawal: string;
    NEROInterop: string;
    NEROForcedWithdrawal: string;
    Orbiter: string;
};
export declare const useProviderName: (provider?: RouteProvider) => string;
export declare const nativeRoutes: RouteProvider[];
export declare const depositRoutes: RouteProvider[];
export declare const withdrawalRoutes: RouteProvider[];
