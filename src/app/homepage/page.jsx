
import Hero from "@/component/layout/Hero2";
import Navbar from "@/component/layout/Navbar";
import '../globals.css'
import BurgerMenu from "@/component/menu/BurgerMenu";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import Modal from "@/component/layout/Modal";





export default function Home() {
  return (
    <GlobalStateProvider >
      <Navbar />
      <Modal />
      <BurgerMenu />
      <Hero />
    </GlobalStateProvider>
  );
}
