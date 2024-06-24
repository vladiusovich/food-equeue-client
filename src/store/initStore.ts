import AppStoreType from "./AppStoreType";
import BranchStore from "./stories/BranchStore";
import OrdersStore from "./stories/OrdersStore";
import UserStore from "./stories/UserStore";
import apiProvider from "../services/dataProvider";

const user = new UserStore();
const branch = new BranchStore();
const orders = new OrdersStore(apiProvider);

const appStore: AppStoreType = {
    user,
    branch,
    orders
};

export default appStore;
