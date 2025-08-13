import { Address } from 'viem';
interface ProfileProps {
    name: string | null;
    address: Address;
    avatar: string | null;
}
export declare const resolveName: (name: string) => Promise<ProfileProps | null>;
export declare const resolveAddress: (address: Address) => Promise<{
    name: string;
    address: `0x${string}`;
    avatar: import('viem').GetEnsAvatarReturnType;
} | null>;
export {};
