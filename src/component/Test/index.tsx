import React from 'react';
import { observer } from 'mobx-react-lite';
import { withViewModel } from '../../hoc';
import { TestVM } from './TestVM';
import { Props } from './types';

const TestComp1 = React.memo(
  observer((props: Props) => {
    const { vm } = props;
    console.log(props, '--props');
    return (
      <div onClick={vm.setUserName}>
        {vm.userName}
        <p>name111 ={vm.name111}</p>
        <p>name222 ={vm.name222}</p>
      </div>
    );
  }),
);

// @observer
// class TestComp extends React.Component<Props> {
//   render() {
//     const { vm } = this.props;

//     return (
//       <div onClick={vm.setUserName}>
//         {vm.userName} name ={vm.name111}
//       </div>
//     );
//   }
// }

// const Test = withViewModel<Props>(TestComp, TestStore);
const TestC = withViewModel<Props>(TestComp1, TestVM);

export { TestC };
