import { Inertia } from "@inertiajs/inertia";
import message from "antd/lib/message";
class PTest {
    constructor(setLoading, classroom, question, type, status) {
        this.setLoading = setLoading;
        this.classroom = classroom;
        this.question = question;
        this.type = type;
        this.status = status;
    }

    checkstatus() {
        if (this.status === "open") {
            message.info("You can't make changes to an open Test!");
            return false;
        }
        return true;
    }

    savequestion(editor, is_new, test) {
        if (!this.checkstatus()) return false;
        this.setLoading(true);
        var data = { question: editor.getData() };
        data.type = this.type;
        if (is_new) {
            data.id = test.id;
            //? if it's a new question then create
            Inertia.post(
                route(`question.create`, {
                    classroom: this.classroom.hash
                }),
                data
            ).then(() => this.setLoading(false));
        } else {
            //? if not update the previous question
            data.id = this.question.id;
            Inertia.patch(
                route(`question.update`, {
                    classroom: this.classroom.hash
                }),
                data
            ).then(() => this.setLoading(false));
        }
    }

    deletequestion() {
        if (!this.checkstatus()) return false;
        this.setLoading(true);
        Inertia.post(
            route(`question.delete`, {
                classroom: this.classroom.hash,
                question: this.question.id
            }),
            { type: this.type }
        ).then(() => this.setLoading(false));
    }

    //?----------------------------------------------------------

    correctoption(options) {
        var is_correct = options.filter(option => {
            if (option.is_correct) {
                return option;
            }
        });
        return is_correct.length > 0 && is_correct[0].id;
    }
    add_option(data) {
        if (!this.checkstatus()) return false;
        this.setLoading(true);
        Inertia.post(
            route(`option.create`, {
                classroom: this.classroom.hash,
                question: this.question.id
            }),
            data
        ).then(() => this.setLoading(false));
    }
    setCorrectOption(option) {
        if (!this.checkstatus()) return false;
        this.setLoading(true);
        Inertia.post(
            route(`option.correct`, {
                classroom: this.classroom.hash,
                question: this.question.id,
                option: option
            })
        ).then(() => this.setLoading(false));
    }
    delete_option(option) {
        if (!this.checkstatus()) return false;
        this.setLoading(true);
        Inertia.post(
            route(`option.destroy`, {
                classroom: this.classroom.hash,
                option: option
            })
        ).then(() => this.setLoading(false));
    }
    //?----------------------------------------------------------
    save_solution(solution, old_solution) {
        if (!this.checkstatus()) return false;
        var data = { solution: solution };
        data.id = old_solution ? old_solution.id : null;
        this.setLoading(true);
        Inertia.post(
            route(`solution.save`, {
                classroom: this.classroom.hash,
                question: this.question.id
            }),
            data
        ).then(() => this.setLoading(false));
    }
}

export default PTest;
