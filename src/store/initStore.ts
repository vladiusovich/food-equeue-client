import AppStoreType from "./AppStoreType";
import BranchStore from "./stores/BranchStore";
import OrdersStore from "./stores/OrdersStore";
import UserStore from "./stores/UserStore";
import ExecutionTimeStore from "./stores/ExecutionTimeStore";
import Auth from "./stores/Auth";
import { RuntimeDataType } from "./types/RuntimeDataType";
import RuntimeDataStore from "./core/RuntimeDataStore";
import { action, makeObservable, observable } from "mobx";

export const runtimeDataStore = new RuntimeDataStore<RuntimeDataType>();

makeObservable(runtimeDataStore, {
    data: observable,
    setData: action,
});

const auth = new Auth();
const user = new UserStore(auth);
const branch = new BranchStore(user);
const executionTime = new ExecutionTimeStore(runtimeDataStore);
const orders = new OrdersStore(runtimeDataStore, executionTime, user);

const appStore: AppStoreType = {
    user,
    branch,
    orders
};

export default appStore;
