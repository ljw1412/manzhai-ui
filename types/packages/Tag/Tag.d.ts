import { CreateElement } from 'vue';
import MzSize from 'manzhai-ui/src/mixins/MzSize';
export default class MzTag extends MzSize {
    readonly color: string;
    readonly textColor: string;
    readonly closable: boolean;
    readonly outlined: boolean;
    readonly round: boolean | string;
    readonly text: boolean;
    get classes(): (string | {
        'mz-tag--closable': boolean;
        'mz-tag--outlined': boolean;
        'mz-tag--round': string | boolean;
        'mz-tag--left-round': boolean;
        'mz-tag--right-round': boolean;
        'mz-tag--text': boolean;
    })[];
    get styles(): {
        borderColor: string;
        backgroundColor: string;
        color: string;
    };
    get closeVnode(): JSX.Element | null;
    render(h: CreateElement): JSX.Element;
}
