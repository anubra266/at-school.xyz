import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Layout from "@/Pages/Auth/Layout";

const register = () => {
    return (
        <Layout
            title="Register at-school"
            title="Register at-school"
            header="Welcome to at-school!"
            subheader="Get your free account to continue"
        >
            <div class="account-card-content">
                <form class="form-horizontal m-t-30" action="index.html">
                    <div className="row">
                        <div className="col">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="Enter username"
                                />
                            </div>
                        </div>
                        <div className="col">
                            {" "}
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="Enter username"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-group row m-t-20">
                        <div class="col-12 text-right">
                            <button
                                class="btn btn-primary w-md waves-effect waves-light"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p>
                        Have an account?{" "}
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

export default register;
