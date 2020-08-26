import React from "react";

function Spinner({ children, type, className, loading }) {
    return (
        <button className={className} type={type} disabled={loading}>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                children
            )}
        </button>
    );
}

export default Spinner;
