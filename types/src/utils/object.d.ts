/**
 * 根据 keys 筛选对象
 * @param obj 原对象
 * @param keys 字符串时以空格隔开，也可以直接传字符串数组
 * @returns ret 过滤后的字符串
 */
export declare function only(obj: Record<string, any>, keys: string | string[]): Record<string, any>;
