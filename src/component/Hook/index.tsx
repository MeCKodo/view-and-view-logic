import React from 'react';
import { useVM } from '../../hook';
import { HookVM } from './Hook.VM';
import { Props } from './types';

const HookComponent = (props: Props) => {
  const vm = useVM<HookVM>(HookVM, props);

  return (
    <div onClick={vm.setUserName}>
      {vm.userName} name ={vm.name111}
    </div>
  );
};

export { HookComponent };
