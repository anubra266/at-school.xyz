import React, { Suspense } from "react";
const Landing = React.lazy(() => import("./Landing"));
import Loading from "@/Shared/Loading";
const index = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Landing />
        </Suspense>
    );
};
export default index;
