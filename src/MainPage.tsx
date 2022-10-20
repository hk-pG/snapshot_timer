import React, { FC } from "react";
// import ReactDOM from "react-dom";
import { Toolbar, Page, Button, Navigator } from "react-onsenui";
import Sample from "./Sample";
import { SecondPage } from "./SecondPage";

type Props = {
  navigator: Navigator;
};

// class MainPage extends React.Component {
//   constructor(props: Props) {
//     super(props);
//   }
//   pushPage() {
//     this.props.navigator.pushPage({ component: SecondPage });
//   }

//   renderToolbar() {
//     return (
//       <Toolbar>
//         <div className="center">Navigator</div>
//       </Toolbar>
//     );
//   }

//   render() {
//     return (
//       <Page renderToolbar={this.renderToolbar}>
//         <p style={{ textAlign: "center" }}>
//           <Button onClick={this.pushPage.bind(this)}>Push page</Button>
//         </p>
//         <Sample />
//       </Page>
//     );
//   }
// }

const MainPage = (props: Props) => {
  const renderToolbar = () => (
    <header>
      <div className="center">Navigator</div>
    </header>
  );
  return (
    <Page renderToolbar={renderToolbar}>
      <p>
        <button
          onClick={() => {
            props.navigator.pushPage({
              component: SecondPage,
            });
          }}
        >
          Push page
        </button>
      </p>
    </Page>
  );
};

export { MainPage };
