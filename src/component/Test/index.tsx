import React from 'react';
import { observer } from 'mobx-react';
import { withViewModel } from '../../hoc';
import { TestVM } from './TestVM';
import { Props } from './types';

@observer
class TestComp extends React.Component<Props> {
  render() {
    const { vm } = this.props;

    return (
      <div onClick={vm.setUserName}>
        class 组件 组件内部数据 = {vm.userName} 父组件传入数据 = {vm.name111}
      </div>
    );
  }
}

const TestC = withViewModel<Props>(TestComp, TestVM);

export { TestC };
