import React from "react";

function Spinner({ children, type, className, loading }) {
    return (
        <button className={className} type={type} disabled={loading}>
            {loading ? (
                <React.Fragment>
                    <span
                        class="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    <span class=""> Loading...</span>
                </React.Fragment>
            ) : (
                children
            )}
        </button>
    );
}

export default Spinner;
