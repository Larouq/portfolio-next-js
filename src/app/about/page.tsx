import dynamic from "next/dynamic";
import Loading from "./Loading";

const AboutPage = dynamic(() => import("./AboutPage"), {
  loading: () => <Loading />,
});

export default function About() {
  return <AboutPage />;
}
