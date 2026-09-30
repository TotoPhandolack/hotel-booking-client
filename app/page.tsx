"use client"
import Home from "./(main)/pages/home/Home";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
const page = () => {

  const isOwnerPath = usePathname().includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="min-h-[70vh]">
        <Home/>
      </div>
    </div>
  )
}

export default page