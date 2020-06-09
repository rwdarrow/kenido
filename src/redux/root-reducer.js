import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer"
import sidebarReducer from "./sidebar/sidebar.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  shop: shopReducer,
  directory: directoryReducer,
  sidebar: sidebarReducer
});

export default persistReducer(persistConfig, rootReducer);
