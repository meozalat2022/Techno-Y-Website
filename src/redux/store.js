import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["cart", "user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
