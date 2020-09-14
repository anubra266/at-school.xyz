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

    const onButtonPress = e => {
        let newEquation = "";
        if (calculated) {
            clear();
            setCalculated(false);
        } else {
            newEquation = equation;
        }
        const pressedButton = e.target.innerHTML;
        if (pressedButton === "C") return clear();
        else if (pressedButton >= "0" && pressedButton <= "9")
            newEquation += pressedButton;
        else if (pressedButton === ".") newEquation += `0${pressedButton}`;
        else if (["+", "-", "*", "/", "%"].indexOf(pressedButton) !== -1)
            newEquation += " " + pressedButton + " ";
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
                    {countdown("Time Left - ", { fontSize: "1rem" })}
                    <CloseOutlined onClick={() => close()} />
                </Space>
            </div>
            <Screen {...{ equation, result }} />
            <Keypad onButtonPress={onButtonPress} />
        </main>
    );
};
export default Calculator;
