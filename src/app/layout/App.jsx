import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export default class App extends Component {
  render() {
    return (
      <div>
        <button className="ui icon button">
          <i className="smile icon"></i>
          Css Button
        </button>{" "}
        <Button icon="smile" content="Akaris" />
      </div>
    );
  }
}
