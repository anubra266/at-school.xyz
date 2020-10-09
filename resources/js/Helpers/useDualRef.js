import { useCallback, useRef } from "react";
/**
 * Set Ref for an Element or Component
 * @param {boolean} cbonly indicates whether to return just callbackref
 * @param {function} callback Function to execute on Node Render (optional)
 * @param {function} cleanup Function to execute on Node Unmount (optional)
 */
export const useDualRef = (cbonly, callback, cleanup) => {
    const ref = useRef(null);
    const setRef = useCallback(node => {
        if (ref.current) {
            cleanup && cleanup(node);
        }
        if (node) {
            callback && callback(node);
        }

        ref.current = node;
    }, []);
    return cbonly ? setRef : [ref, setRef];
};
