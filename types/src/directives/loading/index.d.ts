import { DirectiveFunction } from 'vue';
export interface LoadingDirectiveOptions {
    isDirective: boolean;
    loading: boolean;
    text: string;
    mode: string;
    type: string;
    textColor: string;
    background: string;
}
export declare const Loading: DirectiveFunction;
export default Loading;
