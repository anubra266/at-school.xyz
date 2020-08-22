/**
 * Takes raw role and returns User Friendly Text
 * @param {string} role the raw role to be translated
 */
export function trans_roles(role) {
    var activity;
    switch (role) {
        case "practicist":
            role = "Personal Practice";
            activity = "Start Practicing";
            break;
        case "student":
            role = "Student";
            activity = "Join a Classroom";
            break;
        case "educator":
            role = "Educator";
            activity = "Create Classroom";
            break;
        case "department_head":
            role = "Educator";
            activity = "Create Environ / Department";
            break;
        case "organization_admin":
            role = "Organization Admin";
            activity = "Register Organization";
            break;

        default:
            break;
    }
    return [role, activity];
}
