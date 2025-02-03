import { use, useEffect, useState } from "react";
import { StoreContext } from "./context";

export function useDispatch() {
  const store = use(StoreContext);

  return store.dispatch.bind(store);
}

export function useSelector(selector) {
  const store = use(StoreContext);
  const [value, setValue] = useState(() => selector(store.state));

  useEffect(() => {
    const callback = (state) => {
      setValue(selector(state));
    };

    store.subscribe(callback);

    return () => {
      store.unsubscribe(callback);
    };
  }, [store, selector]);

  return value;
}
