import { useState, useCallback, useEffect, useRef, useImperativeHandle, Ref } from 'react';
import { Debounced, observerDomResize } from '../util/util';

export default function useAutoResize<T>(ref: Ref<T>) {
    const [state, setState] = useState({ width: 0, height: 0 });

    function setWidthHeight(): void {
        const { clientWidth, clientHeight } = domRef.current || { clientWidth: 0, clientHeight: 0 };
        setState({ width: clientWidth, height: clientHeight });
    }

    const domRef: any = useRef(null);

    const setWH: typeof setWidthHeight = useCallback(setWidthHeight, []);

    // @ts-ignore
    useImperativeHandle(ref, (): typeof setWidthHeight => ({ setWH }), []);

    useEffect(() => {
        const debounceSetWHFun = new Debounced(setWH, 100);

        const domObserver = observerDomResize(domRef.current, debounceSetWHFun);

        // @ts-ignore
        window.addEventListener('resize', debounceSetWHFun);
        // 手动触发resize事件，否则会导致图表宽高不能正常展示
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, true);
        window.dispatchEvent(event);

        return () => {
            // @ts-ignore
            window.removeEventListener('resize', debounceSetWHFun);

            if (!domObserver) {
                return;
            }

            domObserver.disconnect();
            domObserver.takeRecords();
        };
    }, []);

    return { ...state, domRef, setWH };
}
