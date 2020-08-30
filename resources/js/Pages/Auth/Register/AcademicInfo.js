import React from "react";

export default function AcademicInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="school">School</label>
                <input
                    name="school"
                    value={data.school}
                    id="school"
                    required
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter school"
                    className="form-control"
                />
                {errors.school && (
                    <div className="text-danger">{errors.school[0]}</div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="school_town">School's Town</label>
                <input
                    name="school_town"
                    value={data.school_town}
                    id="school_town"
                    required
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter School's Town of location"
                    className="form-control"
                />
                {errors.school_town && (
                    <div className="text-danger">{errors.school_town[0]}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="school_town">Select your Classification</label>
                <select
                    name="initial_role"
                    onChange={handleChange}
                    required
                    className="custom-select"
                >
                    <optgroup label="Student">
                        <option value="practicist">Personal Practice</option>
                        <option value="student">Join a Classroom</option>
                    </optgroup>
                    <optgroup label="Educator - Join Organization">
                        <option value="educator">Create Classroom</option>
                        <option value="department_head">
                            Create Environ / Department
                        </option>
                    </optgroup>
                    <optgroup label="Organization Admin">
                        <option value="organization_admin">
                            Register Organization
                        </option>
                    </optgroup>
                </select>
                {errors.initial_role && (
                    <div className="text-danger">{errors.initial_role[0]}</div>
                )}
            </div>
        </React.Fragment>
    );
}
