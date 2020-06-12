import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzButtonGroup extends Vue {
    readonly block: boolean;
    render(h: CreateElement): JSX.Element;
}
