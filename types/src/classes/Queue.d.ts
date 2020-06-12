/**
 * 队列模型类
 * @description 准确来说是双向队列(Deque)
 */
export default class Queue {
    q: any[];
    maxLength: number;
    constructor(maxLength?: number);
    /**
     * 队列是否为空
     */
    isEmpty(): boolean;
    /**
     * 队列是否已满，仅在 maxLength 存在时有效。
     */
    isFull(): boolean;
    /**
     * 获取当前队列长度
     */
    size(): number;
    /**
     * 获取队列
     */
    queue(): any[];
    /**
     * 弹出头元素
     */
    pop(): any;
    /**
     * 弹出尾元素
     */
    popBack(): any;
    /**
     * 尾部插入
     * @param data
     */
    push(...data: any): boolean;
    /**
     * 头部插入
     * @param data
     */
    pushFront(data: any): boolean;
    /**
     * 获取头元素
     */
    front(): any;
    /**
     * 获取尾元素
     */
    back(): any;
    /**
     * 清空队列
     */
    clear(): any[];
}
