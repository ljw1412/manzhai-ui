import { Vue } from 'vue-property-decorator';
export default class MzPaginationPager extends Vue {
    readonly index: number;
    readonly pageCount: number;
    readonly max: number;
    readonly size: string;
    readonly buttonProp: Record<string, any>;
    quickIcon: {
        prev: string;
        next: string;
    };
    get halfPagerCount(): number;
    get exceed(): boolean;
    get displayQuickPrev(): boolean;
    get displayQuickNext(): boolean;
    get pagers(): number[];
    renderPagerNumber(num: number): JSX.Element;
    renderPagerQuick(type: 'prev' | 'next'): JSX.Element;
    render(): JSX.Element | undefined;
}
