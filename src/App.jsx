import { Count } from "./count/component";
import { Provider } from "./custom-redux/provider";
import { Increment } from "./increment/component";
import { store } from "./store";
import { Text } from "./text/component";

export const App = () => {
  return (
    <Provider store={store}>
      <Count />
      <Increment />
      <Text />
    </Provider>
  );
};
