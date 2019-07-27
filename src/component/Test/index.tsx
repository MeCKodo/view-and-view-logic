import React from 'react';
import { observer } from 'mobx-react';
import { withViewModel } from '../../hoc';
import { TestVM } from './TestVM';
import { Props } from './types';

@observer
@withViewModel<Props>(TestVM)
class TestComp extends React.Component<Props> {
  render() {
    const { vm } = this.props;

    return (
      <div onClick={vm.setUserName}>
        {vm.userName} name ={vm.name111}
      </div>
    );
  }
}

// const Test = withViewModel<Props>(TestComp, TestStore);
// const TestC = withViewModel<Props>(TestVM);

export { TestComp };
