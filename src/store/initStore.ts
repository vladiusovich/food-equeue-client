import AppStoreType from "./AppStoreType";
import BranchStore from "./stores/BranchStore";
import OrdersStore from "./stores/OrdersStore";
import UserStore from "./stores/UserStore";
import apiProvider from "../services/dataProvider";
import ExecutionTimeStore from "./stores/ExecutionTimeStore";
import Auth from "./stores/Auth";

const auth = new Auth();
const user = new UserStore(apiProvider, auth);
const branch = new BranchStore(user);
const executionTime = new ExecutionTimeStore(apiProvider);
const orders = new OrdersStore(apiProvider, executionTime, user);

const appStore: AppStoreType = {
    user,
    branch,
    orders
};

export default appStore;
