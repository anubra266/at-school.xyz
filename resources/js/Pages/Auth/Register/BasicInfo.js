import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

function BasicInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            {errors.email && (
                <div className="text-danger">{errors.email[0]}</div>
            )}
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={handleChange}
                    required
                />
                <span className="focus-input100"></span>
            </div>

            {errors.telephone && (
                <div className="text-danger">{errors.telephone[0]}</div>
            )}
            <div className="milabel">Telephone</div>
            <div className="wrap-input100  m-b-20">
                <ReactPhoneInput
                    country={"ng"}
                    defaultCountry={"ngn"}
                    inputProps={{
                        name: "telephone",
                        required: true
                    }}
                    value={data.telephone}
                    onChange={phone =>
                        handleChange({
                            target: { name: "telephone", value: phone }
                        })
                    }
                />
                <span className="focus-input100"></span>
            </div>
            {errors.date_of_birth && (
                <div className="text-danger">{errors.date_of_birth[0]}</div>
            )}
            <div className="milabel">Date of Birth</div>
            <div className="wrap-input100 m-b-20">
                <input
                    className="input100"
                    type="date"
                    name="date_of_birth"
                    placeholder="Date of birth"
                    value={data.date_of_birth}
                    onChange={handleChange}
                    required
                />
                <span className="focus-input100"></span>
            </div>
        </React.Fragment>
    );
}

export default BasicInfo;
