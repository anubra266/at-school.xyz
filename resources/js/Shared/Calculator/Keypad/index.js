import React from "react";
import KeypadRow from "./KeypadRow/";
import Button from "./Button/";
const keypad = ({ onButtonPress }) => {
    const butProps = { onButtonPress };
    return (
        <section className="keypad">
            <KeypadRow>
                <Button type="primary" {...butProps}>
                    C
                </Button>
                <Button type="primary" {...butProps}>
                    &larr;
                </Button>
                <Button type="operator" {...butProps}>
                    %
                </Button>
                <Button type="operator" {...butProps}>
                    /
                </Button>
            </KeypadRow>

            <KeypadRow>
                <Button {...butProps}>9</Button>
                <Button {...butProps}>8</Button>
                <Button {...butProps}>7</Button>
                <Button type="operator" {...butProps}>
                    *
                </Button>
            </KeypadRow>

            <KeypadRow>
                <Button {...butProps}>6</Button>
                <Button {...butProps}>5</Button>
                <Button {...butProps}>4</Button>
                <Button type="operator" {...butProps}>
                    -
                </Button>
            </KeypadRow>

            <KeypadRow>
                <Button {...butProps}>3</Button>
                <Button {...butProps}>2</Button>
                <Button {...butProps}>1</Button>
                <Button type="operator" {...butProps}>
                    +
                </Button>
            </KeypadRow>

            <KeypadRow>
                <Button {...butProps}>0</Button>
                <Button {...butProps}>.</Button>
                <Button {...butProps} type="large">
                    =
                </Button>
            </KeypadRow>
        </section>
    );
};
export default keypad;
