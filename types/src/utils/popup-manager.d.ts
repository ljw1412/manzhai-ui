import Stack from 'manzhai-ui/src/classes/Stack';
declare const PopupManager: {
    zIndex: number;
    popupId: string;
    modalStack: Stack;
    bind(id: string, instance: any): void;
    unbind(id: string): void;
};
export default PopupManager;
