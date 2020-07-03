import FormElement from './FormElement';
export default class InputField extends FormElement {
    readonly value: string | number;
    readonly readonly: boolean;
    readonly placeholder: string;
    readonly ripple: boolean | object;
    readonly autocomplete: 'on' | 'off';
    readonly maxlength: string | number;
    readonly flat: boolean;
    readonly shadow: boolean;
    readonly fieldRef: HTMLInputElement;
    isComposing: boolean;
    focused: boolean;
    get wrapClass(): {
        'is-focused': boolean;
        'is-disabled': boolean;
        'is-shadow': boolean;
        'is-flat': boolean;
    };
    onCompositionstart(event: CompositionEvent): void;
    onCompositionUpdate(event: CompositionEvent): void;
    onCompositionEnd(event: CompositionEvent): void;
    onInput(event: InputEvent | CompositionEvent): void;
    focus(): void;
    blur(): void;
    onFocus(event: InputEvent): void;
    onBlur(event: InputEvent): void;
    onChange(event: InputEvent): void;
}
