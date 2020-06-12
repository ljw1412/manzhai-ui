import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzAnchor extends Vue {
    readonly scrollSmooth: boolean;
    readonly href: string;
    readonly title: string;
    readonly level: number;
    readonly invisible: boolean;
    readonly symbol: string;
    readonly color: string;
    render(h: CreateElement): JSX.Element;
}
