import { Vue } from 'vue-property-decorator';
export default class MzColor extends Vue {
    readonly color: string;
    readonly textColor: string;
    readonly borderColor: string;
    get mColorClass(): {
        bg: string | null;
        text: string | null;
        border: string | null;
    };
    get mColor(): {
        bg: string | null;
        text: string | null;
        border: string | null;
    };
}
