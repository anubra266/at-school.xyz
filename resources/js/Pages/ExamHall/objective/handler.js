export const change = (e, test, setData) => {
    const [index, question_id] = e.target.name;
    const objective_option_id = e.target.value;
    setData(values => {
        var newData = [...values];
        newData[index] = {
            ...{ objective_test_id: test.id },
            question_id,
            objective_option_id
        };
        return newData;
    });
};

export const radioStyle = {
    display: "block",
    height: "30px",
    lineHeight: "30px"
};
