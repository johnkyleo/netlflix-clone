
import { Inter } from "next/font/google";
import Navbar from '../components/Navbar'
import Billboard from "@/components/Billboard";
import Carousel from "@/components/Carousel";
import Western from "@/components/Western";
import Kdrama from "@/components/Kdrama";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <Navbar />
     <Billboard/>
     <Carousel/>
     <Western/>
     <Kdrama/>
    </main>
  );
}
