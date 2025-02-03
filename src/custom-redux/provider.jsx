import { StoreContext } from "./context";

export const Provider = ({ children, store }) => {
  return <StoreContext value={store}>{children}</StoreContext>;
};
