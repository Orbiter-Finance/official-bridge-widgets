export declare const useEvmProfile: (input: string | null | undefined, enabled: boolean) => import('@tanstack/react-query').UseQueryResult<{
    name: string;
    address: `0x${string}`;
    avatar: import('viem').GetEnsAvatarReturnType;
} | {
    name: null;
    address: `0x${string}`;
    avatar: null;
} | null, Error>;
