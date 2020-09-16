import React, { useState } from "react";
import Space from "antd/lib/space";
import CloseOutlined from "@ant-design/icons/CloseCircleFilled";
import "./style.css";
import Screen from "./Screen/";
import Keypad from "./Keypad/";
const Calculator = ({ countdown, close }) => {
    const [equation, setEquation] = useState("");
    const [result, setResult] = useState(0);
    const [calculated, setCalculated] = useState(false);

    const contains_operator = string => {
        return ["+", "-", "*", "/", "%"].indexOf(string) !== -1;
    };
    const onButtonPress = e => {
        let newEquation = "";
        const pressedButton = e.target.innerHTML;
        const is_operator = contains_operator(pressedButton);
        if (
            calculated &&
            !is_operator &&
            !contains_operator(equation.charAt(equation.length - 2))
        ) {
            clear();
        } else {
            newEquation = equation;
        }
        setCalculated(false);
        if (pressedButton === "C") return clear();
        else if (pressedButton >= "0" && pressedButton <= "9") {
            newEquation += pressedButton;
        } else if (pressedButton === ".") newEquation += `0${pressedButton}`;
        else if (is_operator) newEquation += " " + pressedButton + " ";
        else if (pressedButton === "=") {
            try {
                const evalResult = eval(newEquation);
                const newResult = Number.isInteger(evalResult)
                    ? evalResult
                    : evalResult.toFixed(2);
                setResult(newResult);
            } catch (error) {
                alert("Invalid Mathematical equation");
            }
            setCalculated(true);
        } else {
            newEquation = newEquation.trim();
            newEquation = newEquation.substr(0, newEquation.length - 1);
        }

        setEquation(newEquation);
    };
    const clear = () => {
        setEquation("");
        setResult(0);
    };
    return (
        <main className="calculator">
            <div className="closecalc">
                <Space>
                    {countdown &&
                        countdown("Time Left - ", {
                            fontSize: "1rem",
                            fontWeight: "bolder"
                        })}
                    <CloseOutlined onClick={() => close()} />
                </Space>
            </div>
            <Screen {...{ equation, result }} />
            <Keypad onButtonPress={onButtonPress} />
        </main>
    );
};
export default Calculator;
