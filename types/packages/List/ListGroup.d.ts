import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class MzListGroup extends Vue {
    readonly label?: string;
    render(h: CreateElement): JSX.Element;
}
