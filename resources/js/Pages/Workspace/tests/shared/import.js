import React from "react";
import Modal from "antd/lib/modal";
import WarnIcon from "@ant-design/icons/ExclamationCircleOutlined";
import Workbook from "react-excel-workbook";
import { Inertia } from "@inertiajs/inertia";

const min_options = 2;

export const uploadQuestions = (questions, file, test, classroom) => {
    questions = questions.slice(1).reduce((acc, nxt) => {
        const question = nxt[0];
        const options = nxt.filter((option, i) => i !== 0 && !!option);
        acc.push({
            question,
            options
        });
        return acc;
    }, []);

    const noQuestions = questions.reduce((acc, nxt, i) => {
        (!nxt.question || nxt.question.trim() === "") &&
            acc.push({
                i: i,
                question: "",
                ...nxt
            });
        return acc;
    }, []);

    const incompleteOptions = questions.reduce((acc, nxt, i) => {
        nxt.options.length < min_options &&
            acc.push({
                i: i,
                ...nxt
            });
        return acc;
    }, []);

    const invalidQuestions = questions.reduce((acc, nxt, i) => {
        (noQuestions.find(q => q.i === i) ||
            incompleteOptions.find(q => q.i === i)) &&
            acc.push({
                i: i,
                ...nxt
            });
        return acc;
    }, []);

    const validQuestions = questions.filter(
        (a, i) => !invalidQuestions.find(q => q.i === i)
    );

    const max_option_length = invalidQuestions.reduce((acc, nxt) => {
        const option_length = nxt.options.length;
        if (option_length > acc) acc = option_length;
        return acc;
    }, 0);
    const option_map = [];
    while (option_map.length <= max_option_length) {
        option_map.push(1);
    }
    const qDownload = invalidQuestions.reduce((acc, nxt) => {
        const question = nxt.question;
        const optionObj = nxt.options.reduce((acc, nxt, i) => {
            acc[`opt${i}`] = nxt;
            return acc;
        }, {});
        acc.push({ question, ...optionObj });
        return acc;
    }, []);
    if (invalidQuestions.length > 0) {
        Modal.confirm({
            title: "Invalid Questions found😠",
            icon: <WarnIcon />,
            content: (
                <div>
                    <p>
                        We discovered <strong>{questions.length}</strong> row
                        {questions.length !== 1 && "s"} in your upload -{" "}
                        {file.name}, of which{" "}
                        <strong>{invalidQuestions.length}</strong> had errors.
                    </p>
                    <p>
                        {noQuestions.length > 0 && (
                            <React.Fragment>
                                ✴️ <strong>{noQuestions.length} </strong>
                                row{noQuestions.length !== 1 && "s"} without
                                questions. <br />
                            </React.Fragment>
                        )}
                        {incompleteOptions.length > 0 && (
                            <React.Fragment>
                                ✴️ <strong> {incompleteOptions.length}</strong>{" "}
                                question
                                {incompleteOptions.length !== 1 && "s"} without
                                the minimum number{" "}
                                <strong>({min_options})</strong> of options.
                            </React.Fragment>
                        )}
                    </p>
                    <p>
                        <strong>What to do?</strong>
                    </p>
                    <p>
                        ✴️ <strong>Cancel Upload</strong> and correct the
                        invalid questions.
                        <br />
                        ✴️ We've extracted the errors for you,{" "}
                        <strong>upload the correct questions,</strong> then
                        download the extract for correction.
                    </p>
                </div>
            ),
            centered: true,
            okText: (
                <Workbook
                    filename={`Invalid Questions for ${test.title}.xlsx`}
                    element={"Upload Correct😄"}
                >
                    <Workbook.Sheet data={qDownload} name="Errors">
                        {option_map.map((q, i) => {
                            return (
                                <Workbook.Column
                                    key={i}
                                    label={
                                        i === 0
                                            ? "Question"
                                            : `option${i}${
                                                  i > min_options
                                                      ? "(optional)"
                                                      : ""
                                              }`
                                    }
                                    value={row =>
                                        i === 0
                                            ? row.question || "no-question-here"
                                            : row[`opt${i - 1}`] ||
                                              (Object.keys(row).length <
                                                  min_options + 1 &&
                                              i < min_options + 1
                                                  ? `${min_options}-options-min`
                                                  : "")
                                    }
                                />
                            );
                        })}
                    </Workbook.Sheet>
                </Workbook>
            ),
            onOk() {
                insertQuestions(validQuestions, "some", classroom, test);
            },
            okType: "primary",
            cancelText: "Cancel"
        });
    } else {
        //? upload all questions
        insertQuestions(questions, "all", classroom, test);
    }
};

const insertQuestions = (questions, type, classroom, test) => {
    questions = questions.reduce((acc, nxt) => {
        const options = nxt.options.reduce((acc, nxt, i) => {
            const option = {};
            option.is_correct = i === 0 ? true : false;
            option.option = nxt;
            acc.push(option);
            return acc;
        }, []);
        acc.push({ question: nxt.question, options });
        return acc;
    }, []);

    Inertia.post(route("question.import", { classroom: classroom.hash }), {
        questions,
        test: test.id,
        type: "objective",
        mode: type
    });
};
