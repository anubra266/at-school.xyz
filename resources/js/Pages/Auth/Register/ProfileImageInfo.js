// noprotect
import React, { useState } from "react";
import Avatar from "react-avatar-edit";
import { notification } from "antd";
function ProfileimageInfo({ data, handleChange, errors }) {
    const onCrop = preview => {
        handleChange({
            target: { name: "profile_image", value: preview }
        });
    };
    const onBeforeFileLoad = elem => {
        const image = elem.target.files[0];
        const name = image.name;
        console.log([name]);
        if (image.size > 2000000) {
            notification["error"]({
                message: "Upload Profile Picture",
                description: "Image must be smaller than 2mb.",
                placement: "bottomRight"
            });
            elem.target.value = "";
        }
    };
    return (
        <React.Fragment>
            {errors.profile_image && (
                <div className="text-danger">{errors.profile_image[0]}</div>
            )}

            <div className="row justify-content-center mb-4">
                <Avatar
                    width={200}
                    height={200}
                    onCrop={onCrop}
                    onBeforeFileLoad={onBeforeFileLoad}
                    mimeTypes={"image/jpeg"}
                    backgroundColor={"white"}
                />
            </div>
        </React.Fragment>
    );
}

export default ProfileimageInfo;
