import React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

function withViewModel<P = {}>(
  Component: React.ComponentType<any>,
  ViewModel: new (...args: any[]) => any
) {
  return class withViewModelComp extends React.Component<Omit<P, 'vm'>> {
    vm: any;

    constructor(props: Omit<P, 'vm'>) {
      super(props);
      this.vm = new ViewModel();
    }

    render() {
      return <Component {...this.props} vm={this.vm} />;
    }
  };
}

export { withViewModel };
