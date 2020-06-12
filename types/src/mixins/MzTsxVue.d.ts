import { Vue } from 'vue-property-decorator';
import { VNodeData } from 'vue';
export default class MzTsxVue extends Vue {
    createElementWrapper(node: any, wrapperData?: VNodeData): JSX.Element | null;
    createSlotInWrapper(slotName: string, wrapperData?: VNodeData): JSX.Element | null;
}
