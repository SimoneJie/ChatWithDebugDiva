/**
 * 防抖函数
 * @param func - 需要防抖的函数
 * @param delay - 防抖的时间间隔（毫秒）
 * @returns 包装后的防抖函数
 */
export function debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        if (timer) {
            clearTimeout(timer); // 清除之前的定时器
        }
        timer = setTimeout(() => {
            func(...args); // 执行目标函数
        }, delay);
    };
}
/**
 * 节流函数
 * @param func - 需要节流的函数
 * @param delay - 时间间隔（毫秒）
 * @returns 包装后的节流函数
 */
export function throttle<T extends (...args: any[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let lastCall = 0;

    return (...args: Parameters<T>) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
}