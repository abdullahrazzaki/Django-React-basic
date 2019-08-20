import * as React from "react";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./configureStore";
import { Provider } from "react-redux";
import App from "./App";
import Test from "./Test";
import { Route, Switch } from "react-router";

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={App} />

            <Route exact path="/test" component={Test} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;
