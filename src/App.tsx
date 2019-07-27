import React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import { TestC } from './component/Test';

type State = {
  userName: string;
};

@observer
class AppComp extends React.Component<{}, State> {
  state = {
    userName: '二哲',
  };

  handleClick = () => {
    // setInterval(() => {
    this.setState({
      userName: `二哲 ${Math.random().toFixed(4)}`,
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
