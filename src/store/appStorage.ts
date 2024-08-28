class AppStore {
  private accessToken: string | null = null;
  setAccessToken(value: string) {
    this.accessToken = value;
  }
  getAccessToken() {
    return this.accessToken;
  }
}

export const appStore = new AppStore();
