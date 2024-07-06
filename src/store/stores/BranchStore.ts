import GetBranchRequestStore from "@api/getBranch/GetBranchRequestStore";
import { makeObservable, computed } from "mobx"
import UserStore from "./UserStore";
import Branch from "@type/branches/Branch";

class BranchStore {
    private userStore: UserStore;

    public getBranchRequest: GetBranchRequestStore = new GetBranchRequestStore();

    constructor(userStore: UserStore) {
        this.userStore = userStore;

        makeObservable(this, {
            info: computed,
        });
    }

    async fetch(): Promise<void> {
        await this.userStore.fetch();
        await this.getBranchRequest.execute({
            id: this.userStore?.branchId ?? '',
        });
    }

    public get info(): Branch | null {
        return this.getBranchRequest.data;
    }

    public get loading(): boolean {
        return this.getBranchRequest.loading || !this.getBranchRequest.data;
    }
}

export default BranchStore;