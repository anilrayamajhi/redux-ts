import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);
