import AppStoreType from "./AppStoreType";
import { socket } from '../socket';
import BranchStore from "./stories/BranchStore";
import OrdersStore from "./stories/OrdersStore";
import UserStore from "./stories/UserStore";

const user = new UserStore();
const branch = new BranchStore();
const orders = new OrdersStore(socket);

const appStore: AppStoreType = {
    user,
    branch,
    orders
};

export default appStore;
