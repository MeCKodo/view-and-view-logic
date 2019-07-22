import { observable, action } from 'mobx';

class TestStore {
  @observable userName = 'kodo1';

  @action
  setUserName = () => {
    this.userName = '12311';
    console.log(this.userName);
  };
}

export { TestStore };
