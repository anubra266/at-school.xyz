import React from "react";
import Radio from "antd/lib/radio";
import { radioStyle } from "./handler";

export const Option = ({ question, index, handleChange }) => {
    const { options } = question;
    console.log(options);
    return (
        <div>
            <Radio.Group onChange={handleChange} name={[index, question.id]}>
                {question.options.map((option, index) => {
                    return Answer(option, index);
                })}
            </Radio.Group>
        </div>
    );
};

const Answer = (option, index) => {
    return (
        <Radio key={`opt${index}`} style={radioStyle} value={option.id}>
            {option.option}
        </Radio>
    );
};
