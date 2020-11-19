import { InertiaProgress } from "@inertiajs/progress";
import progressBar from "./progress.json";
InertiaProgress.init(progressBar);


// import NProgress from "nprogress";
// import { Inertia } from "@inertiajs/inertia";
// import "./progress.css";

// let timeout = null;

// Inertia.on("start", ({ detail: { visit } }) => {
//     timeout = setTimeout(() => {
//         // if (!visit.hasOwnProperty("silent") || !visit.silent) {
//         NProgress.start();
//         // }
//     }, 0);
// });

// Inertia.on("progress", event => {
//     if (NProgress.isStarted() && event.detail.progress.percentage) {
//         NProgress.set((event.detail.progress.percentage / 100) * 0.9);
//     }
// });

// Inertia.on("finish", event => {
//     console.log('event', event)
//     clearTimeout(timeout);
//     if (!NProgress.isStarted()) {
//         return;
//     } else if (event.detail.visit.completed) {
//         NProgress.done();
//     } else if (event.detail.visit.interrupted) {
//         NProgress.set(0);
//     } else if (event.detail.visit.cancelled) {
//         NProgress.done();
//         NProgress.remove();
//     }
// });
export const useProgress = () => {
    return true;
};
