import { ChainDto } from '../../service/models/chain.model';
export declare const useAddressProfile: (chain: ChainDto | null | undefined, address: string | null | undefined) => {
    isFetching: boolean;
    data: {
        name: string;
        address: `0x${string}`;
        avatar: import('viem').GetEnsAvatarReturnType;
    } | {
        name: null;
        address: `0x${string}`;
        avatar: null;
    } | null | undefined;
};
