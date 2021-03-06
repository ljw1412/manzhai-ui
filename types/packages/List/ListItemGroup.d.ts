import { CreateElement } from 'vue';
import MzTsxVue from 'manzhai-ui/src/mixins/MzTsxVue';
export default class MzListItemGroup extends MzTsxVue {
    readonly mzList: any;
    readonly value: any;
    readonly title: string;
    readonly text: string;
    readonly round: boolean | 'left' | 'right' | 'mini';
    readonly ripple: boolean | object;
    readonly hasActiveStyle: boolean;
    readonly childrenRef: HTMLDivElement;
    isOpen: boolean;
    get arrowRotate(): "180deg" | "0";
    render(h: CreateElement): JSX.Element;
}
