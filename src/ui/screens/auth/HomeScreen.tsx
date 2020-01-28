import React, { Component } from "react";
import { ScreenProps } from "ui/models/screen/ScreenProps";

interface Props extends ScreenProps {}

export default class HomeScreen extends Component<Props> {
  render() {
    return <div>Home Screen</div>;
  }
}
