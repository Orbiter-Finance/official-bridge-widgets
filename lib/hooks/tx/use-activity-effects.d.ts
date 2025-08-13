import { Config } from '@wagmi/core';
import { ChainDto } from '../../service/models/chain.model';
import { Confirmation } from '../../service/models/transaction.model';
export declare const watchTransaction: (wagmiConfig: Config, chain: ChainDto, confirmation: Confirmation, onUpdate: (oldConfirmation: Confirmation, newConfirmation: Confirmation) => void) => Promise<void>;
export declare const useActivityEffects: () => void;
