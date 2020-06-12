import MzSize from 'manzhai-ui/src/mixins/MzSize';
import { CreateElement } from 'vue';
import FormElement from 'manzhai-ui/src/mixins/FormElement';
import BaseAttribute from 'manzhai-ui/src/mixins/BaseAttribute';
declare const MixinClass: import("vue-class-component/lib/declarations").VueClass<MzSize & FormElement & BaseAttribute>;
export default class MzButton extends MixinClass {
    readonly color: string;
    readonly textColor: string;
    readonly borderColor: string;
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
    get classes(): (string | {
        'is-circle': boolean;
        'mz-button--icon': boolean;
        'mz-button--round': boolean;
        'mz-button--flat': boolean;
        'mz-button--outlined': boolean;
        'mz-button--disabled': boolean;
        'mz-button--dense': boolean;
        'mz-button--shadow': boolean;
    })[];
    get styles(): {
        color: string;
        backgroundColor: string;
        borderColor: string;
        borderRadius: string;
        width: string;
        minWidth: string;
        maxWidth: string;
        height: string;
        minHeight: string;
        maxHeight: string;
    };
    render(h: CreateElement): JSX.Element;
    renderContent(): JSX.Element;
}
export {};
