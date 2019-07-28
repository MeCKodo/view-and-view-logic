import { useMemo } from 'react';
import {
  observer,
  useAsObservableSource,
  useLocalStore,
  useObservable,
  useObserver
} from 'mobx-react-lite';

function useVM<T, P>(VM: new (...args: any[]) => T, props?: P) {
  let source;
  if (props) {
    source = useAsObservableSource(props);
  }
  return useMemo(() => {
    return new VM(source);
  }, []);
}

export {
  useVM,
  observer,
  useAsObservableSource,
  useLocalStore,
  useObservable,
  useObserver
};
