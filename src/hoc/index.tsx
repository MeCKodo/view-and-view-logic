import React from 'react';
import { observable, runInAction, IObservableObject } from 'mobx';
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

function withViewModel<P = {}>(ViewModel: new (...args: any[]) => any) {
  return function(Component: React.ComponentType<P>) {
    return class withViewModelComp extends React.Component<P> {
      vm: any;
      vmProps: IObservableObject;
      constructor(props: P) {
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
  };
}

export { withViewModel };
