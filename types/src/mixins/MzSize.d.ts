import { Vue } from 'vue-property-decorator';
export default class MzSize extends Vue {
    readonly size: string;
    get mzSize(): string;
}
