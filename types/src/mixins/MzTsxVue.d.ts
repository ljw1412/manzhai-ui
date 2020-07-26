import { Vue } from 'vue-property-decorator';
import { VNodeData } from 'vue';
export default class MzTsxVue extends Vue {
    slotExtends(name: string): JSX.Element | undefined;
    createElementWrapper(node: any, wrapperData?: VNodeData): JSX.Element | null;
    createSlotInWrapper(slotName: string, wrapperData?: VNodeData): JSX.Element | null;
}
