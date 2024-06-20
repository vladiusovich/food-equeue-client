import BranchStore from "./stories/BranchStore";
import OrdersStore from "./stories/OrdersStore";
import UserStore from "./stories/UserStore";

interface AppStoreType {
    user: UserStore;

    branch: BranchStore;

    orders: OrdersStore;
}

export default AppStoreType;