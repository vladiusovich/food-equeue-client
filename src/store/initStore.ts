import AppStoreType from "./AppStoreType";
import BranchStore from "./stores/BranchStore";
import OrdersStore from "./stores/OrdersStore";
import UserStore from "./stores/UserStore";
import apiProvider from "../services/dataProvider";
import ExecutionTimeStore from "./stores/ExecutionTimeStore";

const user = new UserStore();
const branch = new BranchStore();
const executionTime = new ExecutionTimeStore(apiProvider);
const orders = new OrdersStore(apiProvider, executionTime);

const appStore: AppStoreType = {
    user,
    branch,
    orders
};

export default appStore;
