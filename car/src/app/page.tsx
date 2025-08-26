import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Models from "./Models/page";
import Electric from "./Electric/page";

export default function Home() {
  return (
    <>
    <Header/>
    <Herosection/>
    <Models/>
    <Electric/>
    </>
  );
}
