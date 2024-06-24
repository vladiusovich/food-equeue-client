import BranchStore from "./stores/BranchStore";
import OrdersStore from "./stores/OrdersStore";
import UserStore from "./stores/UserStore";

interface AppStoreType {
    user: UserStore;

    branch: BranchStore;

    orders: OrdersStore;
}

export default AppStoreType;