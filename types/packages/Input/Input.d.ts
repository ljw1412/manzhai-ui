import { CreateElement } from 'vue';
import MzSize from 'manzhai-ui/src/mixins/MzSize';
import InputField from 'manzhai-ui/src/mixins/InputField';
declare const MzInput_base: import("vue-class-component/lib/declarations").VueClass<MzSize & InputField>;
export default class MzInput extends MzInput_base {
    readonly type: string;
    readonly max: any;
    readonly min: any;
    readonly step: any;
    readonly rounded: boolean;
    readonly prefix: string;
    readonly suffix: string;
    renderIcon(position: 'prefix' | 'suffix'): JSX.Element | undefined;
    renderInput(): JSX.Element;
    render(h: CreateElement): JSX.Element;
}
export {};
