import { makeObservable, observable, action, computed } from "mobx"

class AuthStore {

    constructor() {
        makeObservable(this, {
        });
    }

    public login(hash: string): void {
        console.log('login', hash);
    }
}

export default AuthStore;