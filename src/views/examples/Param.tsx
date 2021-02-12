import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> { }

export default class Param extends Component<Props> {
  render() {
    return (
      <div className="Param">
        <h1>Param</h1>
        <h2>Props param: {this.props.match.params.id}</h2>
      </div>
    );
  }
}
