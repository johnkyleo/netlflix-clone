
import { Inter } from "next/font/google";
import Navbar from '../components/Navbar'
import Billboard from "@/components/Billboard";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <Navbar />
     <Billboard/>
     <Carousel/>
    </main>
  );
}
