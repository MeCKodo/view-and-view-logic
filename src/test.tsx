import React from 'react';
import { observer } from 'mobx-react';
import { withViewModel } from './hoc/buildContainer';
import { TestStore } from './store/test';

type Props = {
  vm: TestStore;
  name: string;
};

const TestComp1 = observer((props: Props) => {
  const { vm } = props;
  console.log(props, '--props');
  return <div onClick={vm.setUserName}>{vm.userName}</div>;
});

@observer
class TestComp extends React.Component<Props> {
  render() {
    const { vm } = this.props;

    return <div onClick={vm.setUserName}>{vm.userName}</div>;
  }
}

const Test = withViewModel<Props>(TestComp, TestStore);
const TestC = withViewModel<Props>(TestComp1, TestStore);

export { Test, TestC };
