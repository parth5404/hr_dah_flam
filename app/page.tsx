import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import Body from "@/components/Body"; 
import Search from "@/components/Search";
export default async function Home() {
  return (
    <div>
      <Search/>
      <Body/>
    </div>
  );
}
 