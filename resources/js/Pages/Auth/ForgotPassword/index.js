import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";


import Layout from "@/Pages/Auth/Layout";

function ForgotPassword() {
    return (
            <Layout title="at-school Login">
                <form className="login100-form validate-form">
                    <span className="login100-form-title p-b-37">
                        Reset Password
                    </span>

                    <div
                        className="wrap-input100 m-b-20"
                    >
                        <input
                            className="input100"
                            type="email"
                            name="email"
                            placeholder="Account email"
                            required
                        />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button type="submit" className="login100-form-btn">
                            Reset Password
                        </button>
                    </div>

                    <div className="row justify-content-between mt-4">
                        <div className="col-6">
                            <InertiaLink
                                className="txt2 hov1"
                                href={route("login")}
                            >
                                Sign In
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

export default ForgotPassword;
