import { useDispatch } from "../custom-redux/hooks";

export const Increment = () => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch({ type: "increment" });

  return <button onClick={handleClick}>Increment</button>;
};
