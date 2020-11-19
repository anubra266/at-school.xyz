import React from "react";
import Radio from "antd/lib/radio";
import Typography from "antd/lib/typography";
import { radioStyle } from "./handler";

export const ROption = ({ question, index }) => {
    const { options } = question;
    const userAnswer = options.reduce((acc, nxt) => {
        if (nxt.answers.length > 0) {
            acc = nxt.id;
        }
        return acc;
    }, "");
    return (
        <div>
            <Radio.Group value={userAnswer} name={[index, question.id]}>
                {options.map((option, index) => {
                    return Answer(option, index, userAnswer);
                })}
            </Radio.Group>
        </div>
    );
};
const Answer = (option, index, userAnswer) => {
    const isUserAnswer = userAnswer === option.id;
    const isCorrect = option.is_correct;
    return (
        <Radio key={`opt${index}`} style={radioStyle} value={option.id}>
            <Typography.Text
                style={{
                    color: isCorrect && "green",
                    fontWeight: isCorrect && 700
                }}
                type={
                    isUserAnswer
                        ? isCorrect
                            ? "success"
                            : "danger"
                        : "secondary"
                }
            >
                {option.option} {isUserAnswer && mark(isCorrect)}
            </Typography.Text>
        </Radio>
    );
};

const mark = isCorrect => {
    const correct = "✔️";
    const wrong = "✖️";

    return isCorrect ? correct : wrong;
};
