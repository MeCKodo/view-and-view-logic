import React from 'react';
import { useVM } from '../../hook';
import { HookVM } from './Hook.VM';
import { Props } from './types';

const HookComponent = (props: Props) => {
  const vm = useVM<HookVM>(HookVM, props);

  return (
    <div onClick={vm.setUserName}>
      hook 组件 组件内部数据 = {vm.userName} 父组件传入数据 = {vm.name111}
    </div>
  );
};

export { HookComponent };
