import React, { Suspense } from "react";

import Loading from "@/Shared/Loading";
import CatchError from "@/Helpers/CatchError";

const Layout = React.lazy(() => import("./Layout"));

function Login() {
    return (
        <CatchError>
            <Suspense fallback={<Loading />}>
                <Layout title="at-school Login">
                    <div
                        className="container-login100"
                        style={{
                            backgroundImage: `url(${require("@/assets/auth/images/bg-01.jpg")})`
                        }}
                    >
                        <div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
                            <form className="login100-form validate-form">
                                <span className="login100-form-title p-b-37">
                                    at-school - Sign In
                                </span>

                                <div
                                    className="wrap-input100 validate-input m-b-20"
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
                                    className="wrap-input100 validate-input m-b-25"
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
                                    <button
                                        type="submit"
                                        className="login100-form-btn"
                                    >
                                        Sign In
                                    </button>
                                </div>

                                <div className="row justify-content-between mt-4">
                                    <div className="col-6">
                                        <a href="#" className="txt2 hov1">
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <div className="col-6 text-right">
                                        <a href="#" className="txt2 hov1">
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Layout>
            </Suspense>
        </CatchError>
    );
}

export default Login;
