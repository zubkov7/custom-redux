import { useSelector } from "../custom-redux/hooks";

export const Count = () => {
  const count = useSelector((state) => state.count);

  return <div>count - {count}</div>;
};
