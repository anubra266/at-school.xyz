import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

import Layout from "@/Pages/Auth/Layout";
import LoadingButton from "@/Shared/LoadingButton";

function Login() {
    const [checking, setChecking] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const handleChange = e => {
        const key = e.target.name;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [key]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setChecking(true);
        Inertia.post(route("login"), data).then(() => {
            setChecking(false);
        });
    };
    const { errors } = usePage();

    return (
        <Layout title="Login at-school">
            <form
                className="login100-form validate-form"
                onSubmit={handleSubmit}
            >
                <span className="login100-form-title p-b-37">Sign In</span>

                {errors.email && (
                    <div className="text-danger">{errors.email[0]}</div>
                )}
                <div className="wrap-input100 m-b-20">
                    <input
                        className="input100"
                        type="email"
                        name="email"
                        placeholder="email"
                        required
                        value={data.email}
                        onChange={handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>
                {errors.password && (
                    <div className="text-danger">{errors.password[0]}</div>
                )}
                <div className="wrap-input100 m-b-25">
                    <input
                        className="input100"
                        type="password"
                        name="password"
                        placeholder="password"
                        required
                        value={data.password}
                        onChange={handleChange}
                    />
                    <span className="focus-input100"></span>
                </div>

                <div className="container-login100-form-btn">
                    <LoadingButton
                        type="submit"
                        className="login100-form-btn"
                        loading={checking}
                    >
                        Sign In
                    </LoadingButton>
                </div>

                <div className="row justify-content-between mt-4">
                    <div className="col-6">
                        <InertiaLink
                            className="txt2 hov1"
                            href={route("password.request")}
                        >
                            Forgot Password?
                        </InertiaLink>
                    </div>
                    <div className="col-6 text-right">
                        <InertiaLink
                            className="txt2 hov1"
                            href={route("register")}
                        >
                            Sign Up
                        </InertiaLink>
                    </div>
                </div>
            </form>
        </Layout>
    );
}

export default Login;
