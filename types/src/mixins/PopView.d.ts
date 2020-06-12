import { Vue } from 'vue-property-decorator';
export default class MzPopView extends Vue {
    readonly visible: boolean;
    readonly zIndex: number;
    readonly appendToBody: boolean;
    readonly mask: boolean;
    readonly maskColor: string;
    readonly maskAppendToBody: boolean;
    readonly closeOnClickMask: boolean;
    readonly closeOnPressEscape: boolean;
    readonly beforeClose: (done: any) => void | Promise<any>;
    _popupId: string;
    mZIndex: number;
    maskZIndex: number;
    renderMask(): import("vue").VNode | undefined;
    close(): void;
    handleMaskDisabledClick(): void;
    closeByMask(): void;
    hide(cancel?: any): void;
    displayBodyMask(visible: boolean): void;
    onPopVisibleChange(visible: boolean): void;
    beforeMount(): void;
    beforeDestroy(): void;
    destroyed(): void;
}
