import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import "antd/dist/antd.css";

import Layout from "@/Pages/Auth/Layout";

import PersonalInfo from "@/Pages/Auth/Register2/PersonalInfo";
import BasicInfo from "@/Pages/Auth/Register2/BasicInfo";
import AcademicInfo from "@/Pages/Auth/Register2/AcademicInfo";
import PasswordInfo from "@/Pages/Auth/Register2/PasswordInfo";
import ProfileImageInfo from "@/Pages/Auth/Register2/ProfileImageInfo";

import FormFooter from "@/Pages/Auth/Register2/FormFooter";
function Register() {
    const [checking, setChecking] = useState(false);
    const [page, setPage] = useState(0);
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
        initial_role: "Select your Classification",

        password: "",
        password_confirmation: "",

        profile_image: "",
        initial_profile_image: ""
    });
    const handleChange = e => {
        const key = e.target.name;
        const value = e.target.value;
        setData(values => ({
            ...values,
            [key]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setChecking(true);
        data.initial_role === "Select your Classification"
            ? (data.initial_role = "")
            : "";
        Inertia.post(route("register"), data).then(() => {
            setChecking(false);
        });
    };
    const { errors } = usePage();
    var lastPage = 4;
    var formprops = { data, handleChange, errors };
    var footerprops = { page, setPage, lastPage, checking };
    return (
        <Layout title="Register at-school">
            <form
                className="login100-form validate-form"
                onSubmit={handleSubmit}
            >
                <span className="login100-form-title p-b-37">Sign Up</span>

                {page === 0 && <PersonalInfo {...formprops} />}

                {page === 1 && <BasicInfo {...formprops} />}

                {page === 2 && <AcademicInfo {...formprops} />}

                {page === 3 && <PasswordInfo {...formprops} />}

                {page === 4 && <ProfileImageInfo {...formprops} />}

                <FormFooter {...footerprops} />
            </form>
        </Layout>
    );
}

export default Register;
