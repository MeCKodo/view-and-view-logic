import { observable, action, computed } from 'mobx';

class HookVM {
  @observable userName = 'kodo1';
  @observable props: any;
  constructor(props: any) {
    console.log(props, '---prps');
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

export { HookVM };
