import React, { useState, useEffect } from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import Layout from "@/Pages/Auth/Layout";
import Auth from "@/Helpers/Auth";
import PersonalInfo from "./PersonalInfo";
import BasicInfo from "./BasicInfo";
import AcademicInfo from "./AcademicInfo";
import PasswordInfo from "./PasswordInfo";
import ProfileImageInfo from "./ProfileImageInfo";
import Footer from "./Footer";
const register = () => {
    const { errors } = usePage();
    const [page, setPage] = useState(0);
    const [checking, setChecking] = useState(false);
    const [data, setData] = useState({
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",

        email: "",
        telephone: "",
        date_of_birth: "",

        school: "",
        school_town: "",
        initial_role: "practicist",

        password: "",
        password_confirmation: "",

        profile_image: "",
        initial_profile_image: ""
    });
    const handleChange = e => {
        Auth.handleChange(e, setData);
    };
    const handleSubmit = e => {
        e.preventDefault();
        Auth.handleSubmit("register", setChecking, data);
    };

    const toError = () => {
        const pages = [
            ["first_name", "middle_name", "last_name", "gender"],
            ["email", "telephone", "gender"],
            ["school", "school_town", "initial_role"],
            ["password", "password_confirmation"],
            ["profile_image"]
        ];

        var errArr = pages.reduce((acc, info, page) => {
            info.forEach(field => {
                if (errors[field] && acc.indexOf(page) === -1) {
                    acc.push(page);
                }
            });
            return acc;
        }, []);

        return errArr;
    };
    useEffect(() => {
        var errPages = toError();
        errPages.length > 0 && setPage(errPages[0]);
    }, [errors]);

    
    const lastPage = 4;
    var formprops = { data, handleChange, errors };
    var footerprops = { page, setPage, lastPage, checking };
    return (
        <Layout
            title="Register at-school"
            title="Register at-school"
            header="Welcome to at-school!"
            subheader="Get your free account to continue"
        >
            <div className="account-card-content">
                <form
                    className="form-horizontal m-t-30"
                    onSubmit={handleSubmit}
                >
                    {page === 0 && <PersonalInfo {...formprops} />}
                    {page === 1 && <BasicInfo {...formprops} />}
                    {page === 2 && <AcademicInfo {...formprops} />}
                    {page === 3 && <PasswordInfo {...formprops} />}
                    {page === 4 && <ProfileImageInfo {...formprops} />}

                    <Footer {...footerprops} />
                </form>
            </div>
            <div className="row">
                <div className="col text-center">
                    <p>
                        Have an account?{" "}
                        <InertiaLink
                            className="font-500 text-primary"
                            href={route("login")}
                        >
                            Sign In
                        </InertiaLink>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default register;
