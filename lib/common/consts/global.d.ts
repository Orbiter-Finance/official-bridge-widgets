import { BridgeConfigDto } from '../../service/models/bridge.model';
export declare const DEFAULT_WRAP_URL = "https://eni-mu.vercel.app/bridge";
export declare const DEFAULT_UNWRAP_URL = "https://eni-mu.vercel.app/bridge";
export declare const testConfig: BridgeConfigDto & {
    host: 'test.d2ps0ulbl914sr.amplifyapp.com';
};
export declare const mainnetConfig: BridgeConfigDto & {
    host: 'eni.orbiter.finance';
};
