import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@diasraphael/ck-editor5-base64uploadadapter";

const editor = ({ data, setEditor }) => {
    return (
        <CKEditor
            editor={ClassicEditor}
            data={data}
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
