import PostCustomerIdenitify from "@api/requests/postCustomerIdenitify/PostCustomerIdenitify";
import { makeObservable, observable, action, computed, runInAction } from "mobx"

const TOKEN = 'token';

// TODO: Implement AuthStore when api is ready
class AuthStore {

    public isLoggedIn: boolean = false;

    public token?: string | null = localStorage.getItem(TOKEN);
    public hash?: string | null = localStorage.getItem('hash');

    private postCustomerIdenitify: PostCustomerIdenitify = new PostCustomerIdenitify();

    constructor() {
        makeObservable(this, {
            isLoggedIn: observable,
            token: observable,
            hash: observable,
            login: action,
        });
    }

    public async login(hash: string): Promise<void> {

        await this.postCustomerIdenitify.execute({ hash });

        const info = this.postCustomerIdenitify.data;

        console.log('login', {
            hash,
            info,
        });

        if (info) {
            this.token = info.token;

            localStorage.setItem(TOKEN, this.token);

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