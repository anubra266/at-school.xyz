import React from "react";
import LoadingButton from "@/Shared/LoadingButton";

const Footer = ({ page, setPage, lastPage, checking }) => {
    return (
        <div className="form-group row m-t-20">
            <div className="col-6 text-left">
                <button
                    disabled={page === 0}
                    className="btn btn-primary w-md"
                    type="button"
                    onClick={() => {
                        setPage(page > -1 && page - 1);
                    }}
                >
                    Previous
                </button>
            </div>
            <div className="col-6 text-right">
                {page !== lastPage ? (
                    <button
                        className="btn btn-primary w-md"
                        type="button"
                        onClick={() => {
                            setPage(page < lastPage && page + 1);
                        }}
                    >
                        Next
                    </button>
                ) : (
                    <LoadingButton
                        type="submit"
                        className="btn btn-primary w-md"
                        loading={checking}
                    >
                        Register
                    </LoadingButton>
                )}
            </div>
        </div>
    );
};
export default Footer;
