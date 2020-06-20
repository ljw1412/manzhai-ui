import { Placement } from 'tippy.js';
import Popover from 'manzhai-ui/src/mixins/Popover';
export default class MzDropdown extends Popover {
    readonly placement: Placement;
    readonly animation: string | boolean;
    readonly trigger: 'hover' | 'click' | 'focus' | 'manual';
    readonly theme: string;
    readonly maxWidth: number | 'none';
    readonly matchReferenceWidth: boolean;
    forceProps: {
        role: string;
        followCursor: boolean;
        interactive: boolean;
    };
}
