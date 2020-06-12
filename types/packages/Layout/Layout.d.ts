import { VueConstructor } from 'vue';
interface LayoutConstructor extends VueConstructor {
    Header: VueConstructor;
    Footer: VueConstructor;
    Main: VueConstructor;
    Aside: VueConstructor;
}
declare const Layout: LayoutConstructor;
export default Layout;
