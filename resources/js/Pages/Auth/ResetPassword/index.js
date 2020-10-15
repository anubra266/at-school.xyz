import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import Layout from "@/Pages/Auth/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const resetpassword = (props) => {
    const [data, setData] = useState({
        token: props.token,
        email: props.email
    });
    const [loading, setLoading] = useState(false);

    const reset_password = e => {
        e.preventDefault();
        setLoading(true)
        Inertia.post(route("password.update"), data).then(() => setLoading(false));
    };
    const handleChange = e => {
        const key = e.target.name
        const value = e.target.value
        setData((values) => ({
            ...values,
            [key]: value
        })); 
    };
    const { errors } = usePage();
    return (
        <Layout
            title="Reset Password at-school"
            header="Reset Password"
            subheader=""
        >
            <div className="account-card-content">

                <form
                    method="POST"
                    className="form-horizontal m-t-30"
                    onSubmit={reset_password}
                >
                    <div className="form-group">
                        <label htmlFor="useremail">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="useremail"
                            placeholder="Enter email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email[0]}</div>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">New Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter New Password"
                            value={data.password || ""}
                            required
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <div className="text-danger">{errors.password[0]}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder="Enter Password Confirmation"
                            value={data.password_confirmation || ""}
                            required
                            onChange={handleChange}
                        />
                        {errors.password_confirmation && (
                            <div className="text-danger">{errors.password_confirmation[0]}</div>
                        )}
                    </div>

                    <div className="form-group row m-t-20 mb-0">
                        <div className="col-12 text-right">
                            <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                                disabled={loading}
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p>
                        Remember?{" "}
                        <InertiaLink
                            className="font-500 text-primary"
                            href={route("login")}
                        >
                            Sign In
                        </InertiaLink>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default resetpassword;
