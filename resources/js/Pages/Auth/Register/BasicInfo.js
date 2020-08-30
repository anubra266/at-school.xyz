import React from "react";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function BasicInfo({ data, handleChange, errors }) {
    return (
        <React.Fragment>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    value={data.email}
                    id="email"
                    required
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter Email"
                    className="form-control"
                />
                {errors.email && (
                    <div className="text-danger">{errors.email[0]}</div>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="date_of_birth">Date of birth</label>
                <input
                    name="date_of_birth"
                    value={data.date_of_birth}
                    id="date_of_birth"
                    required
                    onChange={handleChange}
                    type="date"
                    placeholder="Enter Date of Birth"
                    className="form-control"
                />
                {errors.date_of_birth && (
                    <div className="text-danger">{errors.date_of_birth[0]}</div>
                )}
            </div>
            <div className="form-group">
                <label htmlFor="telephone">Telephone</label>
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
                {errors.telephone && (
                    <div className="text-danger">{errors.telephone[0]}</div>
                )}
            </div>
        </React.Fragment>
    );
}
