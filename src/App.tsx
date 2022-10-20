import React from "react";
import ReactDOM from "react-dom";
import { MainPage } from "./MainPage";
import { Navigator } from "react-onsenui";

export default class App extends React.Component {
  renderPage(route: any, navigator: Navigator) {
    const props = route.props || {};
    props.navigator = navigator;

    return React.createElement(route.component, props);
  }

  render() {
    return (
      <div>
        <Navigator
          initialRoute={{ component: MainPage }}
          renderPage={this.renderPage}
        />
      </div>
    );
  }
}
