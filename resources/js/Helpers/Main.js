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
}
export default new Main();
