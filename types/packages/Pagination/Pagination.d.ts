import { CreateElement, VNode } from 'vue';
import MzSize from 'manzhai-ui/src/mixins/MzSize';
export default class MzPagination extends MzSize {
    readonly index: number;
    pageSizeSync: number;
    readonly pageSizes: number[];
    readonly pageCount: number;
    readonly total: number;
    readonly max: number;
    readonly outlined: boolean;
    readonly circle: boolean;
    readonly disabled: boolean;
    readonly layout: string[];
    readonly totalText: string;
    readonly sizeText: string;
    jumpNum: string | number;
    renderStore: Record<string, () => VNode | Element | undefined>;
    get mPageCount(): number;
    get totalTextFormat(): string;
    get buttonProp(): {
        icon: boolean;
        size: string;
        circle: boolean;
        flat: boolean;
        outlined: boolean;
        disabled: boolean;
    };
    handlePageChange(num: number): void;
    renderPager(): JSX.Element;
    renderController(type: 'prev' | 'next'): JSX.Element;
    renderTotal(): JSX.Element | undefined;
    renderPageSizes(): JSX.Element;
    renderJumper(): JSX.Element;
    renderPaginationItems(list: string[]): (Element | VNode | undefined)[];
    render(h: CreateElement): JSX.Element;
    mounted(): void;
}
