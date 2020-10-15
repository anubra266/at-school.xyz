import React, { useState } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Layout from "@/Pages/Auth/Layout";
import LoadingButton from "@/Shared/LoadingButton";
import Auth from "@/Helpers/Auth";
const login = () => {
    const [checking, setChecking] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const handleChange = e => {
        Auth.handleChange(e, setData);
    };
    const handleRemember = e => {
        setData((vals) => ({
            ...vals,
            remember: e.target.checked ? "on" : null
        }))
    }
    const handleSubmit = e => {
        e.preventDefault();
        Auth.handleSubmit("login", setChecking, data);
    };
    const { errors } = usePage();
    return (
        <Layout
            title="Login at-school"
            header="Welcome Back!"
            subheader="Sign in to continue to at-school"
        >
            <div className="account-card-content">
                <form
                    className="form-horizontal m-t-30"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            required
                            value={data.email}
                            id="email"
                            onChange={handleChange}
                            placeholder="Enter email"
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email[0]}</div>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            name="password"
                            required
                            value={data.password}
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <div className="text-danger">
                                {errors.password[0]}
                            </div>
                        )}
                    </div>

                    <div className="form-group row m-t-20">
                        <div className="col-sm-6">
                            <div className="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="customControlInline"
                                    onChange={handleRemember}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customControlInline"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="col-sm-6 text-right">
                            <LoadingButton
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                                loading={checking}
                            >
                                Sign In
                            </LoadingButton>
                        </div>
                    </div>

                    <div className="form-group m-t-10 mb-0 row">
                        <div className="col-12 m-t-20">
                            <InertiaLink
                                className="txt2 hov1"
                                href={route("password.request")}
                            >
                                <i className="mdi mdi-lock"></i> Forgot your
                                password?
                            </InertiaLink>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p>
                        Don't have an account?{" "}
                        <InertiaLink
                            className="font-500 text-primary"
                            href={route("register")}
                        >
                            Signup now
                        </InertiaLink>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default login;
