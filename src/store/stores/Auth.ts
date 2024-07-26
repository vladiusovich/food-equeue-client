import PostCustomerIdenitify from "@api/requests/postCustomerIdenitify/PostCustomerIdenitify";
import { makeObservable, observable, action, computed, runInAction } from "mobx"
import { ACCESS_TOKEN } from "../../const/authConstans";

class AuthStore {
    public accessToken?: string | null = localStorage.getItem(ACCESS_TOKEN);
    private postCustomerIdentify: PostCustomerIdenitify = new PostCustomerIdenitify();

    constructor() {
        makeObservable(this, {
            isLoggedIn: computed,
            accessToken: observable,
            hash: computed,
            login: action,
        });
    }

    public async login(hash: string): Promise<void> {
        try {
            await this.postCustomerIdentify.execute({ hash });
            const info = this.postCustomerIdentify.data;

            if (info) {
                runInAction(() => {
                    runInAction(() => {
                        this.accessToken = info.access_token;
                    });
                });

                runInAction(() => {
                    localStorage.setItem(ACCESS_TOKEN, this.accessToken!);
                    localStorage.setItem('hash', hash);
                });

            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    public get isLoggedIn(): boolean {
        return !!this.accessToken ?? false;
    }

    public get hash(): string | null {
        return localStorage.getItem('hash') ?? null;
    }
}

export default AuthStore;
