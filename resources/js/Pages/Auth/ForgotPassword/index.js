import React from "react";
import Layout from "@/Pages/Auth/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";

const resetpassword = () => {
    return (
        <Layout
            title="Reset Password at-school"
            header="Reset Password"
            subheader=""
        >
            <div className="account-card-content">
                <div className="alert alert-success m-t-30" role="alert">
                    Enter your Email and instructions will be sent to you!
                </div>

                <form className="form-horizontal m-t-30" action="index.html">
                    <div className="form-group">
                        <label for="useremail">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="useremail"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group row m-t-20 mb-0">
                        <div className="col-12 text-right">
                            <button
                                className="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
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

export default resetpassword;
