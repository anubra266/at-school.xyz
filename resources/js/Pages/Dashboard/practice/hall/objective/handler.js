export const change = (e, setData) => {
    const [index, question_id] = e.target.name;
    const objective_option_id = e.target.value;
    setData(values => {
        var newData = [...values];
        newData[index] = {
            question_id,
            objective_option_id
        };
        return newData;
    });
    return index;
};

export const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
};
import React from "react";

export const useDynamicRefs = list => {
    const refs = list.reduce((acc, nxt, index) => {
        acc[index] = React.createRef();
        return acc;
    }, {});
    return refs;
};

export function useShuffle(array) {
    return array.sort(() => 0.5 - Math.random());
}
