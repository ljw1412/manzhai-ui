import InputField from 'manzhai-ui/src/mixins/InputField';
export default class MzTextarea extends InputField {
    readonly value: string;
    readonly resize: 'none' | 'both' | 'horizontal' | 'vertical';
    readonly rows: number | string;
    renderTextarea(): JSX.Element;
    render(): JSX.Element;
    setNativeValue(): void;
    handleValueChange(value: string): void;
}
