import heroImage from "../../assets/images/hero.png";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1>« La sophrologie pour aider les enfants à grandir sereinement »</h1>
      <img src={heroImage} alt="Hero Image" />
    </section>
  );
}
