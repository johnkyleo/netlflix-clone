
import { Inter } from "next/font/google";
import Navbar from '../components/Navbar'
import Billboard from "@/components/Billboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
     <Navbar />
     <Billboard/>
    </main>
  );
}
