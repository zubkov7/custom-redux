class Store {
  state;
  reducer;

  subscribers = new Map();

  constructor(reducer, defaultState = {}) {
    this.reducer = reducer;
    this.state = defaultState;
  }

  subscribe(callback) {
    this.subscribers.set(callback, callback);
    callback(this.state);
  }

  unsubscribe(callback) {
    this.subscribers.delete(callback);
  }

  sendChanges() {
    [...this.subscribers.values()].forEach((callback) => {
      callback(this.state);
    });
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.sendChanges();
  }
}

export const createStore = (() => {
  let currentStore;

  return (reducer, defaultState) => {
    if (!currentStore) {
      currentStore = new Store(reducer, defaultState);
    }

    return currentStore;
  };
})();
