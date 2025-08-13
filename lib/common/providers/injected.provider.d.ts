import { ReactNode } from 'react';
import { InjectedState } from '../../service/models/inject.model';
import { BridgeConfig } from '../../types';
export declare const injectedStateAtom: import('jotai').PrimitiveAtom<InjectedState | null> & {
    init: InjectedState | null;
};
export interface InjectedStoreProviderProps {
    children: ReactNode;
    projectId: BridgeConfig['projectId'];
    network?: BridgeConfig['network'];
}
export declare const InjectedStoreProvider: ({ children, projectId, network }: InjectedStoreProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useInjectedStore: <T>(selector: (state: Partial<InjectedState>) => T) => T;
