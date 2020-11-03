import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import Layout from "@/Pages/Auth/Layout";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const resetpassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const verify_email = e => {
        e.preventDefault();
        setLoading(true)
        Inertia.post(route("password.email"), { email }).then(() => { setLoading(false); setEmail("") });
    };
    const handleChange = e => {
        setEmail(e.target.value);
    };
    const { errors, flash } = usePage().props;
    useEffect(() => {
        flash.info && setStatus(flash.info)
    })
    return (
        <Layout
            title="Reset Password at-school"
            header="Reset Password"
            subheader=""
        >
            <div className="account-card-content">
                <div className={`alert alert-${flash.info ? "success" : "info"} m-t-30`} role="alert">
                    {status || "Enter your Email and instructions will be sent to you!"}
                </div>

                <form
                    method="POST"
                    className="form-horizontal m-t-30"
                    onSubmit={verify_email}
                >
                    <div className="form-group">
                        <label htmlFor="useremail">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="useremail"
                            placeholder="Enter email"
                            value={email}
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <div className="text-danger">{errors.email[0]}</div>
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
