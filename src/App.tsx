import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { DemoStore } from './store';
import { withViewModel } from './hoc/buildContainer';
import { Test, TestC } from './test';
type Props = {
  vm: DemoStore;
};

@observer
class AppComp extends React.Component<Props> {
  render() {
    const { vm } = this.props;
    console.log(vm, '---vm');
    return (
      <div className="App">
        <header className="App-header">
          <p onClick={vm.setUserName}>
            Edit <code>{vm.userName}</code> and save to reload.
          </p>
          <Test name={'123'} />
          <TestC name={'123'} />
        </header>
      </div>
    );
  }
}

const App = withViewModel<Props>(AppComp, DemoStore);

export default App;
