import React from 'react';
import { observer } from 'mobx-react';

import './App.css';
import { TestC } from './component/Test';
import { HookComponent } from './component/Hook';

type State = {
  userName: string;
};

@observer
class AppComp extends React.Component<{}, State> {
  state = {
    userName: '二哲'
  };

  handleClick = () => {
    setInterval(() => {
      this.setState({
        userName: `${Math.random().toFixed(4)}`
      });
    }, 300);
  };

  render() {
    const { userName } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <p onClick={this.handleClick}>
            点击我 <code>{userName}</code> 观察父组件传入子组件的数据
          </p>
          {/* <Test name={vm.userName} /> */}
          <TestC name={userName} name222={userName + '211222'} />
          <HookComponent name={userName} name222={userName + '211222'} />
        </header>
      </div>
    );
  }
}

export default AppComp;
