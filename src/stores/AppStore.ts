import { observable, action } from "mobx";

export class AppStore {
  @observable
  name = "Süper App";

  @action
  setName = (name: string) => {
    this.name = name;
  };
}

const AppStoreInstance = new AppStore();
export default AppStoreInstance;
