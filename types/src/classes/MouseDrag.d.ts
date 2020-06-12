export default class MzMouseDrag {
    initialX: number;
    initialY: number;
    x: number;
    y: number;
    startX: number;
    startY: number;
    deltaX: number;
    deltaY: number;
    moving: boolean;
    button?: number;
    auto: boolean;
    _drag: (e: MouseEvent) => false | Record<string, any>;
    _end: (e: MouseEvent) => Record<string, any>;
    /**
     *
     * @param x 初始的x位置
     * @param y 初始的y位置
     * @param button 允许的鼠标按键
     * @param auto 自动绑定后续事件
     */
    constructor(x?: number, y?: number, button?: number, auto?: Boolean);
    start(e: MouseEvent): false | Record<string, any>;
    drag(e: MouseEvent): false | Record<string, any>;
    end(e: MouseEvent): Record<string, any>;
    reset(): void;
}
