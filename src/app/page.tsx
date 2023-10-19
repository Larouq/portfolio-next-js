import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("./home/Home"));

export default function Home() {
  return <HomePage />;
}
