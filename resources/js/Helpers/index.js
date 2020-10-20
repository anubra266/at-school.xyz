//TODO Find a more professional way to do this
export const urlHash = () => {
    const url = window.location.href;
    const hash = url.split("#", 2)[1];
    return hash;
};
