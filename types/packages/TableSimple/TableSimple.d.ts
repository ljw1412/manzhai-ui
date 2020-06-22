import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzTableSimple extends Vue {
    readonly data: [any[]];
    readonly header: boolean;
    readonly hover: boolean;
    readonly lined: boolean;
    readonly border: boolean;
    readonly align: string;
    readonly autoComplete: boolean;
    get maxLength(): number;
    render(h: CreateElement): JSX.Element;
    renderTr(trData: any[], Tag?: 'th' | 'td'): JSX.Element;
    getItem(item: any, Tag: 'th' | 'td', row: any[]): any;
    getTableData(): {
        span: number;
        data: any;
    }[][];
}
