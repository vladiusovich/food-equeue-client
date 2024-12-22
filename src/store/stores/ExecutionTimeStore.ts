import { makeObservable, computed } from "mobx"
import RuntimeDataStore from "../core/RuntimeDataStore";
import { } from "../../api/socketApiListner";
import { RuntimeDataType } from "../types/RuntimeDataType";

class ExecutionTimeStore {
    constructor(
        private runtimeDataStore: RuntimeDataStore<RuntimeDataType>,
    ) {
        makeObservable(this, {
            time: computed,
        });
    }

    public get time(): number | null {
        return this.runtimeDataStore?.data?.executionTime ?? null;
    }
}

export default ExecutionTimeStore;