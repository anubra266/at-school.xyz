import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@diasraphael/ck-editor5-base64uploadadapter";

const editor = ({ is_new, questions, currentQuestion, setEditor }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={!is_new ? questions[currentQuestion].question : ""}
            onInit={editor => {
                setEditor(editor);
            }}
            onChange={(event, editor) => {
                //is_new && setNewQuestion(editor.getData());
            }}
        />
    );
};

export default editor;
