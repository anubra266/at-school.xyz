import React, { useImperativeHandle } from "react";

export const useExpose = (ref, functions) => {
    return useImperativeHandle(ref, () => {
        return { ...functions };
    });
};
