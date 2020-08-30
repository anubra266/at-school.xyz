import React from "react";
import Input from "antd/lib/input";
import Space from "antd/lib/space";

function PasswordInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            {errors.password && (
                <div className="text-danger">{errors.password[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <Input.Password
                    placeholder="input password"
                    required
                    name="password"
                    onChange={handleChange}
                    value={data.password}
                />
                <span className="focus-input100"></span>
            </div>

            {errors.password_confirmation && (
                <div className="text-danger">
                    {errors.password_confirmation[0]}
                </div>
            )}
            <div className="wrap-input100 m-b-20">
                <Input.Password
                    placeholder="confirm password"
                    required
                    name="password_confirmation"
                    onChange={handleChange}
                    value={data.password_confirmation}
                />
                <span className="focus-input100"></span>
            </div>
        </React.Fragment>
    );
}

export default PasswordInfo;
