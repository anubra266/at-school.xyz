class Main {
    /**
     * Formats User Name
     * @param {object} user user to format
     */
    name(user) {
        return `${user.first_name} ${user.middle_name[0].toUpperCase()}. ${
            user.last_name
        }`;
    }
    /**
     * Sorts Object elements of array
     * @param {string} a previous element of array
     * @param {string} b next element of array
     * @param {string} sorter attribute of object to use in sorting
     */
    sort(a, b, sorter) {
        return a[sorter] === b[sorter] ? 0 : a[sorter] < b[sorter] ? -1 : 1;
    }
    /**
     * Capitalize first character in string
     * @param {string} string string to format
     */
    fCap(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    /**
     * Checks if a students meets certain search cinditions
     * @param {object} student student to search
     * @param {string} value value to match against student
     */
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

    textToImage() {
        var canvasElement = document.createElement("canvas");
        canvasElement.width = 186;
        canvasElement.height = 222;
        var canvas = canvasElement.getContext("2d");
        canvas.fillStyle = "#f6d021";
        canvas.textAlign = "center";
        canvas.textBaseline = "middle";
        canvas.font = "bold 40px KaiTi, arial, helvetica, sans-serif";
        canvas.fillText("This will be animage", 0, 0);
        return canvas.canvas.toDataURL();
    }
    /**
     * Converts date to human readable format
     * @param {object} date Date Object to format
     */
    human_date(date) {
        const options = {
            weekday: "short",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true
        };
        return new Date(date).toLocaleString(undefined, options);
    }
    /**
     * Converts date to format acceptable in database
     * @param {object} date date object to format
     */
    dbdate(date) {
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);

        var hours = ("0" + date.getHours()).slice(-2);
        var minutes = ("0" + date.getMinutes()).slice(-2);
        var seconds = "00";

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`; //2020-08-29 23:02:00
    }
    /**
     * Formats date in ant form to normal format
     * @param {object} data form form data to be submitted
     */
    antdate(data) {
        data.start_time = this.dbdate(data.period[0]._d);
        data.deadline = this.dbdate(data.period[1]._d);
        return data;
    }
}
export default new Main();
