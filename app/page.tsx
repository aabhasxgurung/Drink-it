import About from "./AboutUs/About";
import Banner from "./Homepage/Banner";
import FeaturedProcuts from "./products/FeaturedProcuts";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <FeaturedProcuts />
    </div>
  );
}
