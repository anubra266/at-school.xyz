import React, { useState } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import LoadingButton from "@/Shared/LoadingButton";

function Login() {
    const [checking, setChecking] = useState(false);
    const [data, setdata] = useState({
        email: "",
        password: ""
    });
    const handleChange = e => {
        const key = e.target.name;
        const value = e.target.value;
        setdata(values => ({
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
        <form
            action=""
            method="post"
            className="form-box"
            onSubmit={handleSubmit}
        >
            <h3 className="h4 text-black mb-4">Login</h3>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Addresss"
                    required
                    value={data.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <div className="text-danger font-weight-lighter small">
                        {errors.email[0]}
                    </div>
                )}
                <div className="text-danger font-weight-lighter small"></div>
            </div>
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={data.password}
                    onChange={handleChange}
                />
                {errors.password && (
                    <div className="text-danger font-weight-lighter small">
                        {errors.password[0]}
                    </div>
                )}
            </div>
            <div className="form-group">
                <LoadingButton
                    type="submit"
                    className="btn prpbut btn-pill"
                    loading={checking}
                >
                    Login
                </LoadingButton>
            </div>
        </form>
    );
}

export default Login;
