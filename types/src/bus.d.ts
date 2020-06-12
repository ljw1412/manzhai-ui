import { Vue } from 'vue-property-decorator';
declare class MzBus extends Vue {
    theme: string;
    themeChange(val: string): void;
    beforeCreate(): void;
    created(): void;
    changeTheme(name: string): void;
}
declare const _default: MzBus;
export default _default;
