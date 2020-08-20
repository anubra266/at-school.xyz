import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";

import CatchError from "@/Helpers/CatchError";

import Layout from "./Layout";

function Login() {
    return (
        <CatchError>
            <Layout title="at-school Login">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-37">
                        Sign In
                    </span>

                    <div
                        className="wrap-input100 m-b-20"
                        data-validate="Enter email"
                    >
                        <input
                            className="input100"
                            type="email"
                            name="email"
                            placeholder="email"
                            required
                        />
                        <span className="focus-input100"></span>
                    </div>

                    <div
                        className="wrap-input100 m-b-25"
                        data-validate="Enter password"
                    >
                        <input
                            className="input100"
                            type="password"
                            name="password"
                            placeholder="password"
                            minLength={"6"}
                            required
                        />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button type="submit" className="login100-form-btn">
                            Sign In
                        </button>
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
                                href={route("register.form")}
                            >
                                Sign Up
                            </InertiaLink>
                        </div>
                    </div>
                </form>
            </Layout>
        </CatchError>
    );
}

export default Login;
