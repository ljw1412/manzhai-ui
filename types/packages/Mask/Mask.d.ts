import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzMask extends Vue {
    readonly visible: boolean;
    readonly transition: string;
    readonly color: string;
    readonly zIndex: number;
    readonly appendToBody: boolean;
    readonly absolute: boolean;
    readonly blur: string;
    readonly onClick: (e: MouseEvent) => void;
    mZIndex: number;
    render(h: CreateElement): JSX.Element;
    onVisibleChange(visible: boolean): void;
    onZIndexChange(zIndex?: number): void;
    destroyed(): void;
}
