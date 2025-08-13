import { ChainDto } from '../../service/models/chain.model';
export declare const useExplorerLink: (type: "tx" | "address", payload: string, chain: ChainDto | undefined | null) => {
    name: string | undefined;
    link: string;
};
export declare const transactionLink: (payload: string, chain: ChainDto | undefined | null) => string;
export declare const addressLink: (payload: string, chain: ChainDto | undefined) => {
    name: string | undefined;
    link: string;
};
