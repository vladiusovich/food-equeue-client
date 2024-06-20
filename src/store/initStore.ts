import AppStoreType from "./AppStoreType";
import Todo from "./stories/Todo";

const todo = new Todo("Buy milk");

const appStore: AppStoreType = {
    todo
};

export default appStore;
