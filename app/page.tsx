import About from "./components/About";
import Features from "./components/Features";

import GettingStarted from "./components/GettingStarted";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import CustomerReviews from "./components/CustomerFeedback";
import ContactUs from "./components/ContactUs";


export default function Home() {
  return (
    <div>
    <Hero />
    <About />
    <HowItWorks />
    <Features />
    <GettingStarted />
    <CustomerReviews />
    <ContactUs />
    </div>
  );
}
