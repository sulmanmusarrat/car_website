import Image from "next/image";
import Link from "next/link";
import Herosection from "./components/Herosection";
import Models from "./Models/page";
import Electric from "./Electric/page";

export default function Home() {
  return (
    <>
    <Herosection/>
    <Models/>
    <Electric/>
    </>
  );
}
