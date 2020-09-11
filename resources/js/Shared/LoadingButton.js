import React from "react";

function Spinner({ children, type, className, loading }) {
    return (
        <button className={className} type={type} disabled={loading}>
            {loading ? (
                <React.Fragment>
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    <span className=""> Loading...</span>
                </React.Fragment>
            ) : (
                children
            )}
        </button>
    );
}

export default Spinner;
