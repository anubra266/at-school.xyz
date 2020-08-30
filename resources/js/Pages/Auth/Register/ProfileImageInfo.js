import React from "react";
import Avatar from "react-avatar-edit";
function ProfileimageInfo({ data, handleChange, errors }) {
    const onCrop = preview => {
        handleChange({
            target: { name: "profile_image", value: preview }
        });
    };
    const onBeforeFileLoad = elem => {
        const image = elem.target.files[0];
        const name = image.name;
        if (image.size > 5000000) {
            alert("Image must be smaller than 5mb.");
            elem.target.value = "";
        } else {
            var reader = new FileReader();
            reader.addEventListener(
                "load",
                function() {
                    // convert image file to base64 string
                    var src = reader.result;
                    //add file to input
                    handleChange({
                        target: { name: "initial_profile_image", value: src }
                    });
                },
                false
            );
            if (image) {
                reader.readAsDataURL(image);
            }
        }
    };
    return (
        <React.Fragment>
            <div className="text-center">
                {errors.profile_image && (
                    <div className="text-danger">{errors.profile_image[0]}</div>
                )}
                <h4 className="milabel">Profile Picture</h4>
            </div>
            <div className="row justify-content-center mb-4">
                <Avatar
                    width={200}
                    height={200}
                    onCrop={onCrop}
                    onBeforeFileLoad={onBeforeFileLoad}
                    mimeTypes={"image/jpeg"}
                    backgroundColor={"white"}
                    src={data.initial_profile_image}
                />
            </div>
        </React.Fragment>
    );
}

export default ProfileimageInfo;
