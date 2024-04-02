'use client'
import Image from "next/image";
import Navbar from "../components/nabvar/navbar";
import Hero from "../components/hero/hero";
import About from "./personal/_partials/about/page"
import Pendidikan from "./personal/_partials/pendidikan/pendidikan";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About />
    <Pendidikan/>
    </>
  );
}
