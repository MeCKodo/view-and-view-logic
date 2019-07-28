import { observable, action, computed } from 'mobx';
import { Props } from './types';
class TestVM {
  @observable userName = '二哲';
  @observable props: Props;
  constructor(props: Props) {
    this.props = props;
  }

  @computed
  get name111() {
    return this.props.name;
  }

  @computed
  get name222() {
    return this.props.name222 + '222222222';
  }

  @action
  setUserName = () => {
    this.userName = '12311';
    console.log(this.userName);
  };
}

export { TestVM };
