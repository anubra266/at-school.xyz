import { InertiaApp } from "@inertiajs/inertia-react";
import React from "react";
import { render } from "react-dom";
import CatchError from "@/Helpers/CatchError";
import "@/assets/general/css/custom.css";
import { useProgress } from "./progress";
const app = document.getElementById("app");
useProgress();

render(
    <CatchError>
        <React.Fragment>
            <InertiaApp
                initialPage={JSON.parse(app.dataset.page)}
                resolveComponent={name =>
                    import(`./Pages/${name}`).then(module => module.default)
                }
            />
        </React.Fragment>
    </CatchError>,
    app
);
