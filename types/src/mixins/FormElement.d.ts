import { Vue } from 'vue-property-decorator';
export default class FormElement extends Vue {
    readonly disabled: boolean;
    readonly name: string;
    readonly label: string;
    readonly value: any;
}
