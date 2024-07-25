import PostCustomerIdenitify from "@api/requests/postCustomerIdenitify/PostCustomerIdenitify";
import { makeObservable, observable, action, computed, runInAction } from "mobx"
import { ACCESS_TOKEN } from "../../const/authConstans";

// TODO: Implement AuthStore when api is ready
class AuthStore {

    public isLoggedIn: boolean = false;

    public accessToken?: string | null = localStorage.getItem(ACCESS_TOKEN);
    public hash?: string | null = localStorage.getItem('hash');

    private postCustomerIdenitify: PostCustomerIdenitify = new PostCustomerIdenitify();

    constructor() {
        makeObservable(this, {
            isLoggedIn: observable,
            accessToken: observable,
            hash: observable,
            login: action,
        });
    }

    public async login(hash: string): Promise<void> {

        await this.postCustomerIdenitify.execute({ hash });

        const info = this.postCustomerIdenitify.data;

        if (info) {
            this.accessToken = info.access_token;

            localStorage.setItem(ACCESS_TOKEN, this.accessToken);

            // TODO: reimplement it
            localStorage.setItem('hash', hash);

            runInAction(() => {
                this.isLoggedIn = true;
            });

        } else {
            this.isLoggedIn = false;
        }
    }
}

export default AuthStore;