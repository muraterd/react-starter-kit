import React, { Component } from "react";
import { ScreenProps } from "ui/models/screen/ScreenProps";

interface Props extends ScreenProps {}

export default class IndexScreen extends Component<Props> {
  render() {
    return <div>Index Screen</div>;
  }
}
