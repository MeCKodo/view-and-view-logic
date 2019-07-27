import React from 'react';
import { observable, runInAction, IObservableObject } from 'mobx';
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

function withViewModel<P = {}>(
  Component: React.ComponentType<any>,
  ViewModel: new (...args: any[]) => any,
) {
  return class withViewModelComp extends React.Component<Omit<P, 'vm'>> {
    vm: any;
    vmProps: IObservableObject;
    constructor(props: Omit<P, 'vm'>) {
      super(props);
      this.vmProps = observable(props, {}, { deep: false });
      this.vm = new ViewModel(this.vmProps);
    }

    componentDidUpdate() {
      runInAction(() => {
        Object.assign(this.vmProps, this.props);
      });
    }

    render() {
      return <Component {...this.props} vm={this.vm} />;
    }
  };
}

export { withViewModel };
