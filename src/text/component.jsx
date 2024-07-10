import { useSelector } from "../custom-redux/hooks";

export const Text = () => {
  const text = useSelector((state) => state.text);
  // const count = useSelector((state) => state.count);

  return <div>text - {text}</div>;
};
