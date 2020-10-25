import { Inertia } from "@inertiajs/inertia";
class PTest {
    constructor(setLoading, question) {
        this.setLoading = setLoading;
        this.question = question;
    }

    savequestion(editor, is_new, test) {
        this.setLoading(true);
        var data = { question: editor.getData() };
        if (is_new) {
            data.id = test.id;
            //? if it's a new question then create
            Inertia.post(route(`question.create`), data).then(() =>
                this.setLoading(false)
            );
        } else {
            //? if not update the previous question
            data.id = this.question.id;
            Inertia.patch(route(`question.update`), data).then(() =>
                this.setLoading(false)
            );
        }
    }

    deletequestion() {
        this.setLoading(true);
        Inertia.post(
            route(`question.delete`, {
                question: this.question.id
            })
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
        this.setLoading(true);
        Inertia.post(
            route(`option.create`, {
                question: this.question.id
            }),
            data
        ).then(() => this.setLoading(false));
    }
    setCorrectOption(option) {
        this.setLoading(true);
        Inertia.post(
            route(`option.correct`, {
                question: this.question.id,
                option: option
            })
        ).then(() => this.setLoading(false));
    }
    delete_option(option) {
        this.setLoading(true);
        Inertia.post(
            route(`option.destroy`, {
                option: option
            })
        ).then(() => this.setLoading(false));
    }
    //?----------------------------------------------------------
    save_solution(solution, old_solution) {
        var data = { solution: solution };
        data.id = old_solution ? old_solution.id : null;
        this.setLoading(true);
        Inertia.post(
            route(`solution.save`, {
                question: this.question.id
            }),
            data
        ).then(() => this.setLoading(false));
    }
}

export default PTest;
