import thunk from "redux-thunk";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import { persistedReducer } from "./root.reducer";

// Passing thunk as middleware for async actions
const middleWares: any[] = [thunk];

// Setting redux logger to only work in development environment
if (process.env.NODE_ENV === "development") middleWares.push(logger);

const store = createStore(persistedReducer, applyMiddleware(...middleWares));

// Persisting the store to be enable storing data in localstorage with redux persist
export const persistor = persistStore(store);

export default store;
