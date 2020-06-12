import { Vue } from 'vue-property-decorator';
export default class BaseAttribute extends Vue {
    readonly width: string;
    readonly minWidth: string;
    readonly maxWidth: string;
    readonly height: string;
    readonly minHeight: string;
    readonly maxHeight: string;
    get baseStyles(): {
        width: string;
        minWidth: string;
        maxWidth: string;
        height: string;
        minHeight: string;
        maxHeight: string;
    };
}
