class RouteManager {
  history: any;

  redirectTo = (url: string) => {
    this.history.push(url);
  };

  redirectIfNeeded = (url: string) => {
    if (this.history.location.pathname !== url) {
      this.history.push(url);
      return true;
    } else {
      return false;
    }
  };
}

export default new RouteManager();
