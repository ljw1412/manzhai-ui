import { CreateElement } from 'vue';
import MouseDrag from 'manzhai-ui/src/classes/MouseDrag';
import MzPopView from 'manzhai-ui/src/mixins/PopView';
interface ImageItem {
    url: string;
    title?: string;
    thumbnail?: string;
}
interface ActionItem {
    title: string;
    icon: string;
    name: string;
    display?: boolean;
    disabled?: boolean;
}
export default class MzImagePreview extends MzPopView {
    readonly images: (string | ImageItem)[];
    readonly layout: string;
    readonly zoom: number[];
    readonly maskColor: string;
    indexSync: number;
    readonly closeOnClickMask: boolean;
    mIndex: number;
    scale: number;
    timeCount: number;
    playing: boolean;
    fullscreen: boolean;
    thumbnail: boolean;
    heightPriority: boolean;
    mouseDrag: MouseDrag;
    playTimer: number | null;
    get mImages(): ImageItem[];
    get currentImage(): ImageItem;
    get countText(): string;
    get layoutState(): Record<string, boolean>;
    get actions(): ({
        title: string;
        icon: string;
        name: string;
        display: boolean;
        disabled: boolean;
    } | {
        title: string;
        icon: string;
        name: string;
        display: boolean;
        disabled?: undefined;
    })[];
    get arrows(): {
        title: string;
        icon: string;
        name: string;
        display: boolean;
    }[];
    renderProgress(): JSX.Element | null;
    renderActionBtn({ icon, title, name, disabled }: ActionItem): JSX.Element;
    renderHeader(): JSX.Element;
    readerContent(): JSX.Element;
    readerFooter(): JSX.Element | undefined;
    renderArrows(): JSX.Element[];
    render(h: CreateElement): JSX.Element;
    zoomImage(offset: number): void;
    action(name: string): void;
    handleImageLoad(e: Event): void;
    clearPlayTimer(): void;
    onImagePreviewVisible(visible: boolean): void;
    onIndexChange(index: number): void;
    onPlayChange(isPlay: boolean): void;
}
export {};
