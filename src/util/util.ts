export class Debounced {
    /**
     * 防抖使用
     * @param func 需要包装的函数
     * @param delay 延迟时间，单位ms
     * @param immediate 是否默认执行一次(第一次不延迟)
     */
    constructor(func: () => any, delay: number, immediate = false) {
        let timer: number;
        return (...args: any) => {
            if (immediate) {
                func.apply(this, args); // 确保引用函数的指向正确，并且函数的参数也不变
                immediate = false;
                return;
            }
            clearTimeout(timer);
            // @ts-ignore
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
}

/**
 * 监听dom元素变化
 * @param dom
 * @param callback
 */
export function observerDomResize(dom: HTMLInputElement, callback: any) {
    const observer = new window.MutationObserver(callback);

    observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true,
    });
    return observer;
}
