import Clients from "@/components/Clients";
import Consulting from "@/components/Consulting";
import Contact from "@/components/Contact";
import Delever from "@/components/Delever";
import ErpSystems from "@/components/ErpSystems";
import Footer from "@/components/Footer";
import Goodzone from "@/components/Goodzone";
import Hero from "@/components/Hero";
import Iman from "@/components/Iman";
import MobileApps from "@/components/MobileApps";
import Navbar from "@/components/Navbar";
import Optimization from "@/components/Optimization";
import Services from "@/components/Services";
import Sms from "@/components/Sms";
import Team from "@/components/Team";
import Tools from "@/components/Tools";
import UX from "@/components/UX";
import WorkingProcess from "@/components/WorkingProcess";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <MobileApps />
      <ErpSystems />
      <UX />
      <Optimization />
      <Consulting />
      <Tools />
      <Clients />
      <Delever />
      <Sms />
      <Goodzone />
      <Iman />
      <WorkingProcess />
      <Contact />
      <Footer />
    </div>
  );
}
