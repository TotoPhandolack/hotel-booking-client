"use client"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
const page = () => {

  const isOwnerPath = usePathname().includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div ></div>
    </div>
  )
}

export default page