import React from "react";

export default function PersonalInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                    name="first_name"
                    value={data.first_name}
                    id="first_name"
                    required
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter First Name"
                    className="form-control"
                />
                {errors.first_name && (
                    <div className="text-danger">{errors.first_name[0]}</div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="middle_name">Middle Name</label>
                <input
                    name="middle_name"
                    value={data.middle_name}
                    id="middle_name"
                    required
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Middle Name"
                    className="form-control"
                />
                {errors.middle_name && (
                    <div className="text-danger">{errors.middle_name[0]}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                    name="last_name"
                    value={data.last_name}
                    id="last_name"
                    required
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Last Name"
                    className="form-control"
                />
                {errors.last_name && (
                    <div className="text-danger">{errors.last_name[0]}</div>
                )}
            </div>

            <div className="form-group">
                <label className="d-block mb-3">Gender :</label>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        id="customRadioInline1"
                        name="gender"
                        required
                        className="custom-control-input"
                        onChange={handleChange}
                        value="male"
                        checked={data.gender == "male"}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customRadioInline1"
                    >
                        Male
                    </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                    <input
                        type="radio"
                        name="gender"
                        required
                        id="customRadioInline2"
                        className="custom-control-input"
                        onChange={handleChange}
                        value="female"
                        checked={data.gender == "female"}
                    />
                    <label
                        className="custom-control-label"
                        htmlFor="customRadioInline2"
                    >
                        Female
                    </label>
                </div>
                {errors.gender && (
                    <div className="text-danger">{errors.gender[0]}</div>
                )}
            </div>
        </React.Fragment>
    );
}
