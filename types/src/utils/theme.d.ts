/**
 * 切换根节点上的主体名称 (data-theme)
 * @param name 主题名称
 */
export declare function changeTheme(name: string): void;
export declare function getCurrentTheme(): string;
/**
 * 是否为预设颜色
 * @param color 颜色
 * @param type 类型
 */
export declare function isPresetColor(color?: string, type?: 'text' | 'bg' | 'border'): boolean;
/**
 * 获得预设颜色样式类
 * @param color 颜色
 * @param type 类型
 */
export declare function getPresetColorClass(color?: string, type?: 'text' | 'bg' | 'border'): string | null;
