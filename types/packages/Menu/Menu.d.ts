import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzMenu extends Vue {
    readonly placement: 'top' | 'right' | 'bottom' | 'left';
    readonly ripple: boolean | object;
    get isHorizontal(): boolean;
    render(h: CreateElement): JSX.Element;
}
