"use client"
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
const page = () => {

  const isOwnerPath = usePathname().includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
    </div>
  )
}

export default page