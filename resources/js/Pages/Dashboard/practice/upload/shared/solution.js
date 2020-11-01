import React, { useState } from "react";
import Modal from "antd/lib/modal";
import Button from "antd/lib/button";
import TestEditor from "@/Shared/editor";

const Solution = ({
    question,
    is_new,
    PTesti,
    visible,
    setVisible,
    loading
}) => {
    const [editor, setEditor] = useState(null);
    const data = (!is_new && question.solution && question.solution.solution)||'';
    const editorProps = {
        data,
        setEditor
    };

    const save_solution = () => {
        PTesti.save_solution(editor.getData(), question.solution);
    };
    return (
        <div>
            <Modal
                centered
                title="Explanatory Solution"
                visible={visible}
                confirmLoading={loading}
                okText="Save"
                onOk={() => save_solution()}
                onCancel={() => setVisible(false)}
                extra={[<Button type="primary" danger />]}
            >
                <TestEditor {...editorProps} />
            </Modal>
        </div>
    );
};

export default Solution;
