import React, { useState } from "react";
import Assets from "@/Helpers/Assets";

const index = ({ children }) => {
    return (
        <div>
            <Assets />
            {children}
        </div>
    );
};

export default index;
