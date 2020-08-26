import React from "react";
import Select from "antd/lib/select";
const { Option, OptGroup } = Select;

function AcademicInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            {errors.school && (
                <div className="text-danger">{errors.school[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    type="text"
                    name="school"
                    placeholder="School"
                    required
                    value={data.school}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

            {errors.school_town && (
                <div className="text-danger">{errors.school_town[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    required
                    type="text"
                    name="school_town"
                    placeholder="School's Town"
                    value={data.school_town}
                    onChange={handleChange}
                />
                <span className="focus-input100"></span>
            </div>

            {errors.initial_role && (
                <div className="text-danger">{errors.initial_role[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <Select
                    required
                    name="initial_role"
                    placeholder="Select your classification"
                    value={data.initial_role}
                    className="input100Select"
                    onChange={value => {
                        handleChange({
                            target: { name: "initial_role", value: value }
                        });
                    }}
                >
                    <OptGroup label="Student">
                        <Option value="practicist">Personal Practice</Option>
                        <Option value="student">Join a Classroom</Option>
                    </OptGroup>
                    <OptGroup label="Educator - Join Organization">
                        <Option value="educator">Create Classroom</Option>
                        <Option value="department_head">
                            Create Environ / Department
                        </Option>
                    </OptGroup>
                    <OptGroup label="Organization Admin">
                        <Option value="organization_admin">
                            Register Organization
                        </Option>
                    </OptGroup>
                </Select>
                <span className="focus-input100"></span>
            </div>
        </React.Fragment>
    );
}

export default AcademicInfo;
