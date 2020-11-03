import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import message from "antd/lib/message";

const useFlashMessage = () => {
    const { flash, errors } = usePage().props;
    message.config({
        duration: 5,
        maxCount: 1
    });
    useEffect(() => {
        Object.keys(flash).forEach(status => {
            flash[status] && message[status](flash[status]);
        });
    }, [flash]);
    useEffect(() => {
        Object.keys(errors).length > 0 &&
            message.error(
                Object.keys(errors)
                    .reduce((acc, err) => {
                        acc.push(`${errors[err][0]} `);
                        return acc;
                    }, [])
                    .join("")
            );
    }, [errors]);
};

export default useFlashMessage;
