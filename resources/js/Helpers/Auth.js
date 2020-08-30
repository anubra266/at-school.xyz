import { Inertia } from "@inertiajs/inertia";
class Auth {
    /**
     * Handles change in a form
     * @param {object} e the event object for input to be accepted
     * @param {object} setData function used to mutate state
     */
    handleChange(e, setData) {
        const key = e.target.name;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [key]: value
        }));
    }
    /**
     * Submit Form data
     * @param {string} dest route to post form data
     * @param {object} setChecking function to indicate request's status
     * @param {object} data Form data to be submitted
     */
    handleSubmit(dest, setChecking, data) {
        setChecking(true);
        Inertia.post(route(dest), data).then(() => {
            setChecking(false);
        });
    }
}

export default new Auth();
