class Main {
    name(user) {
        return `${user.first_name} ${user.middle_name[0].toUpperCase()}. ${
            user.last_name
        }`;
    }
    sort(a, b, sorter) {
        return a[sorter] === b[sorter] ? 0 : a[sorter] < b[sorter] ? -1 : 1;
    }
    fCap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    meetSearch(student, value) {
        var pass = false;
        var props = ["first_name", "middle_name", "last_name", "email"];
        props.forEach(prop => {
            if (
                student[prop].toLowerCase().indexOf(value.toLowerCase()) !== -1
            ) {
                pass = true;
            }
        });
        return pass;
    }
}
export default new Main();
