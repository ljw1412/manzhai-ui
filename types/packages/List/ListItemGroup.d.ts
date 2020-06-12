import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzListItemGroup extends Vue {
    readonly mzList: any;
    readonly value: any;
    readonly title: string;
    readonly text: string;
    readonly round: boolean | 'left' | 'right' | 'mini';
    readonly ripple: boolean | object;
    readonly notAllowSelected: boolean;
    readonly hasActiveStyle: boolean;
    readonly childrenRef: HTMLDivElement;
    isOpen: boolean;
    get arrowRotate(): "180deg" | "0";
    render(h: CreateElement): JSX.Element;
}
