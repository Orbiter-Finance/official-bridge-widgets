import { ModalName } from '../service/stores/modal.store';
export declare const useModal: (name: ModalName) => {
    isOpen: boolean;
    data: string | undefined;
    open: (data?: string) => void;
    close: () => void;
};
