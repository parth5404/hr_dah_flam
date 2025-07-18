
import { getServerSession} from "next-auth";
import { redirect } from "next/navigation";
import Search from "@/components/Search";
import Body from "@/components/Body";
export default async function Home() {
  const session=await getServerSession();
 // console.log(session);
  if (!session?.user) {
    return redirect('/api/auth/signin');
  }
  return (
   
        <div>
          <Search />
          <Body />
        </div>
  );
}
