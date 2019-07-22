import { observable, action } from 'mobx';

class DemoStore {
  @observable userName = 'kodo';

  @action
  setUserName = () => {
    this.userName = '123';
    console.log(this.userName);
  };
}

export { DemoStore };
