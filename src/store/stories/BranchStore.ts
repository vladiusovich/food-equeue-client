import { makeObservable, observable, action } from "mobx"

class BranchStore {
    id = Math.random()
    title = ""
    finished = false

    constructor() {
        makeObservable(this, {
            title: observable,
            finished: observable,
            toggle: action
        })
    }

    toggle() {
        this.finished = !this.finished
    }
}

export default BranchStore;