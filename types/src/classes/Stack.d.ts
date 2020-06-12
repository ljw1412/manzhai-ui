export default class Stack {
    stack: any[];
    maxLength: number;
    constructor(maxLength?: number);
    /**
     * 栈是否为空
     */
    isEmpty(): boolean;
    /**
     * 栈是否已满，仅在 maxLength 存在时有效。
     */
    isFull(): boolean;
    /**
     * 栈的大小
     */
    size(): number;
    /**
     * 入栈
     * @param data
     */
    push(...data: any): boolean;
    /**
     * 出栈
     */
    pop(): any;
    /**
     * 获取栈顶
     */
    top(): any;
}
