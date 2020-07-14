import { CreateElement } from 'vue';
import MzSize from 'manzhai-ui/src/mixins/MzSize';
import MzColor from 'manzhai-ui/src/mixins/MzColor';
import FormElement from 'manzhai-ui/src/mixins/FormElement';
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute';
declare const MixinClass: import("vue-class-component/lib/declarations").VueClass<MzSize & MzColor & FormElement & BaseAttribute>;
export default class MzButton extends MixinClass {
    readonly ripple: boolean | object;
    readonly icon: boolean;
    readonly circle: boolean;
    readonly outlined: boolean;
    readonly flat: boolean;
    readonly round: boolean;
    readonly dense: boolean;
    readonly shadow: boolean;
    readonly nativeType: string;
    readonly radius: string;
    get mColorClass(): any;
    get mColorStyle(): any;
    get classes(): (string | unknown[] | {
        'text-white': boolean | "";
        'rounded-circle': boolean;
        'is-primary': boolean;
        'is-icon': boolean;
        'is-round': boolean;
        'is-flat': boolean;
        'is-outlined': boolean;
        'is-disabled': boolean;
        'is-dense': boolean;
        'is-shadow': boolean;
    })[];
    get styles(): any;
    render(h: CreateElement): JSX.Element;
    renderContent(): JSX.Element;
}
export {};
