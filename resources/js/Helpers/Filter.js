export var filterChecks = [
    { label: "Gender", value: "gender" },
    { label: "Email", value: "email" },
    { label: "Telephone", value: "telephone" },
    { label: "Date of birth", value: "date_of_birth" },
    { label: "School", value: "school" },
    { label: "Town", value: "school_town" }
];

export const filtersList = filterChecks.reduce((acc, nxt) => {
    acc.push(nxt.value);
    return acc;
}, []);

export const initial_filter = filtersList.filter((v, i) =>
    [0, 4, 5].includes(i)
);
