import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Introduction from "../../components/Introduction/Introduction";
import SessionFlow from "../../components/SessionFlow/SessionFlow";
import Usages from "../../components/Usages/Usages";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Usages />
      <SessionFlow />
    </>
  );
}
