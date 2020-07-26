import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzSlideGroup extends Vue {
    scrollWrapperRef: HTMLElement;
    contentRef: HTMLElement;
    scrollWrapper: {
        width: number;
        height: number;
    };
    content: {
        width: number;
        height: number;
    };
    translate: number;
    isWheel: boolean;
    get isOverflow(): boolean;
    get centerPoint(): {
        x: number;
        y: number;
    };
    render(h: CreateElement): JSX.Element;
    renderContent(translate: number): JSX.Element;
    renderControls(): JSX.Element[];
    throttleSizeChange: () => void;
    sizeChange(): void;
    scrollBy(delta: number): void;
    scrollTo(x: number): void;
    controlClick(direction: 'left' | 'right'): void;
    contentClick(e: MouseEvent): void;
    mounted(): void;
    beforeDestroy(): void;
    onIsOverflowChange(val: boolean): void;
}
