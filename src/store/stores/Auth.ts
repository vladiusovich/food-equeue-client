import PostCustomerIdenitify from "@api/postCustomerIdenitify/PostCustomerIdenitify";
import { makeObservable, observable, action, computed } from "mobx"

class AuthStore {

    public postCustomerIdenitify: PostCustomerIdenitify = new PostCustomerIdenitify();

    constructor() {
        makeObservable(this, {
        });
    }

    public async login(hash: string): Promise<void> {
        const info = await this.postCustomerIdenitify.execute({ hash });

        console.log(info);
    }
}

export default AuthStore;