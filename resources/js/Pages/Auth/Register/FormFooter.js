import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import LoadingButton from "@/Shared/LoadingButton";
import DoubleLeftOutlined from "@ant-design/icons/DoubleLeftOutlined";
import DoubleRightOutlined from "@ant-design/icons/DoubleRightOutlined";
function FormFooter({ page, setPage, lastPage, checking }) {
    return (
        <React.Fragment>
            <div className="row justify-content-between">
                <div className="col-6">
                    <button
                        disabled={page === 0}
                        type="button"
                        className="login100-form-btn atlogin"
                        onClick={() => {
                            setPage(page > -1 && page - 1);
                        }}
                    >
                        <DoubleLeftOutlined /> Prev
                    </button>
                </div>
                <div className="col-6">
                    {page === lastPage ? (
                        <LoadingButton
                            type="submit"
                            className="login100-form-btn atlogin"
                            loading={checking}
                        >
                            Sign Up
                        </LoadingButton>
                    ) : (
                        <button
                            type="button"
                            className="login100-form-btn atlogin"
                            onClick={() => {
                                setPage(page < lastPage && page + 1);
                            }}
                        >
                            Next <DoubleRightOutlined />
                        </button>
                    )}
                </div>
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
