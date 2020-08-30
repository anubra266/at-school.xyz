import React from "react";

export default function BasicInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    value={data.password}
                    id="password"
                    required
                    onChange={handleChange}
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                />
                {errors.password && (
                    <div className="text-danger">{errors.password[0]}</div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="password_confirmation">Confirm Password</label>
                <input
                    name="password_confirmation"
                    value={data.password_confirmation}
                    id="password_confirmation"
                    required
                    onChange={handleChange}
                    type="password"
                    placeholder="Re enter Password"
                    className="form-control"
                />
                {errors.password_confirmation && (
                    <div className="text-danger">
                        {errors.password_confirmation[0]}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}
