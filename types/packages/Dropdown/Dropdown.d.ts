import { Placement } from 'tippy.js';
import Popover from 'manzhai-ui/src/mixins/Popover';
export default class MzDropdown extends Popover {
    readonly placement: Placement;
    readonly animation: string | boolean;
    readonly theme: string;
    readonly maxWidth: number | 'none';
    readonly matchReferenceWidth: boolean;
    forceProps: {
        role: string;
        trigger: string;
        followCursor: boolean;
        hideOnClick: boolean;
        interactive: boolean;
    };
}
