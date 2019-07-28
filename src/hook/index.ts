import { useMemo } from 'react';
import {
  observer,
  useAsObservableSource,
  useLocalStore,
  useObservable,
  useObserver
} from 'mobx-react-lite';

function useVM<T>(VM: new (...args: any[]) => T, props: any = {}) {
  const source = useAsObservableSource(props);
  // eslint-disable-next-line
  return useMemo(() => new VM(source), []);
}

export {
  useVM,
  observer,
  useAsObservableSource,
  useLocalStore,
  useObservable,
  useObserver
};
