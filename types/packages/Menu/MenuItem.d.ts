import { CreateElement } from 'vue';
import MzTsxVue from 'manzhai-ui/src/mixins/MzTsxVue';
export default class MzMenuItem extends MzTsxVue {
    readonly placement: string;
    readonly ripple: any;
    readonly value: any;
    readonly title: string;
    readonly text: string;
    readonly prefix: string;
    readonly suffix: string;
    readonly disabled: boolean;
    readonly round: boolean | 'left' | 'right' | 'mini';
    get isHorizontal(): boolean;
    render(h: CreateElement): JSX.Element;
    renderIcon(): ("" | JSX.Element)[];
}
