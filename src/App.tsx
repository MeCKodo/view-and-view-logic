import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { withViewModel } from './hoc';
import { TestC } from './component/Test';

type Props = {};

type State = {
  userName: string;
};

@observer
class AppComp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userName: 'app component',
    };
  }

  handleClick = () => {
    // setInterval(() => {
    this.setState({
      userName: `DemoStore123123${Math.random().toFixed(4)}`,
    });
    // }, 50);
  };

  render() {
    const { userName } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.handleClick}>
            Edit <code>{userName}</code> and save to reload.
          </p>
          {/* <Test name={vm.userName} /> */}
          <TestC name={userName} name222={userName + '211222'} />
        </header>
      </div>
    );
  }
}

export default AppComp;
