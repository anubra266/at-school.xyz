import React from "react";
import { Radio } from "antd";

export default function PersonalInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            {errors.first_name && (
                <div className="text-danger">{errors.first_name[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                    value={data.first_name}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

            {errors.middle_name && (
                <div className="text-danger">{errors.middle_name[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    type="text"
                    name="middle_name"
                    placeholder="Middle Name"
                    required
                    value={data.middle_name}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

            {errors.last_name && (
                <div className="text-danger">{errors.last_name[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                    value={data.last_name}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>
            {errors.gender && (
                <div className="text-danger">{errors.gender[0]}</div>
            )}
            <label>Gender</label>
            <div className="wrap-input100 m-b-20">
                <Radio.Group
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}
                    optionType="button"
                >
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                </Radio.Group>
            </div>
        </React.Fragment>
    );
}
