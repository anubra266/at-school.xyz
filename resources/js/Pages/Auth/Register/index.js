import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

import Layout from "@/Pages/Auth/Layout";

import PersonalInfo from "@/Pages/Auth/Register/PersonalInfo";
import BasicInfo from "@/Pages/Auth/Register/BasicInfo";
import AcademicInfo from "@/Pages/Auth/Register/AcademicInfo";
import PasswordInfo from "@/Pages/Auth/Register/PasswordInfo";
import ProfileImageInfo from "@/Pages/Auth/Register/ProfileImageInfo";

import FormFooter from "@/Pages/Auth/Register/FormFooter";

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
        initial_role: "",

        password: "",
        password_confirmation: "",

        profile_image: ""
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
        Inertia.post(route("register"), data).then(() => {
            setChecking(false);
        });
    };
    const { errors } = usePage();
    var formprops = { data, handleChange, errors };
    return (
        <Layout title="at-school Register">
            <form
                className="login100-form validate-form"
                onSubmit={handleSubmit}
            >
                <span className="login100-form-title p-b-37">Sign Up</span>
                {1 == 2 && (
                    <React.Fragment>
                        <PersonalInfo {...formprops} />
                        <BasicInfo {...formprops} />
                        <AcademicInfo {...formprops} />
                        <PasswordInfo {...formprops} />
                        <ProfileImageInfo {...formprops} />
                    </React.Fragment>
                )}

                <FormFooter checking={checking} />
            </form>
        </Layout>
    );
}

export default Register;
