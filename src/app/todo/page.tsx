import dynamic from "next/dynamic";
import Loading from "./Loading";

const TodoPage = dynamic(() => import("./TodoPage"), {
  loading: () => <Loading />,
});

export default function Todo() {
  return <TodoPage />;
}
