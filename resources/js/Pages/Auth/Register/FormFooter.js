import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import LoadingButton from "@/Shared/LoadingButton";

function FormFooter({ checking }) {
    return (
        <React.Fragment>
            <div className="container-login100-form-btn">
                <LoadingButton
                    type="submit"
                    className="login100-form-btn"
                    loading={checking}
                >
                    Sign Up
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
                    <InertiaLink className="txt2 hov1" href={route("login")}>
                        Sign In
                    </InertiaLink>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FormFooter;
