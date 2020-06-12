import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzRow extends Vue {
    readonly gutter: number;
    readonly flex: boolean;
    readonly align: string;
    readonly justify: string;
    readonly tag: string;
    get rowClasses(): (string | Record<string, any>)[];
    get rowStyles(): Record<string, string>;
    render(h: CreateElement): import("vue").VNode;
}
