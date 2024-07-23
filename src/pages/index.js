import Image from "next/image";
import { Inter } from "next/font/google";
import Component from "@/component/component"
import Header from "@/component/header/header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <div>
    <Header/>
    <Component/>
    
   </div>
   </>
  );
}
