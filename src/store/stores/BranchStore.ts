import GetBranchRequestStore from "@api/getBranch/GetBranchRequestStore";
import { makeObservable, computed } from "mobx"
import UserStore from "./UserStore";
import Branch from "@type/branches/Branch";

class BranchStore {
    private userStore: UserStore;

    public branchStore: GetBranchRequestStore = new GetBranchRequestStore();

    constructor(userStore: UserStore) {
        this.userStore = userStore;

        makeObservable(this, {
            info: computed,
        });

        // TODO: is it good idea?
        this.branchStore.execute({
            orderId: this.userStore.orderId,
        });
    }

    public get info(): Branch | null {
        return this.branchStore.data;
    }

    public get loading(): boolean {
        return this.branchStore.loading || !this.branchStore.data;
    }
}

export default BranchStore;