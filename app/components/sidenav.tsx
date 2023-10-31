import Link from "next/link";
import NavLink from "@/app/components/nav-links";
import Image from "next/image";
import logout from '@/public/logout.svg'

export default function SideNav() {
  return (
    <>
      <div className="max-w-[260px] w-full">
        <div className="h-[80.3vh] bg-white flex flex-col justify-between rounded-lg py-8">
          <NavLink/>
          <Link
            href="/"
            className="pl-8 flex items-center h-[32px] text-[#88c2bb] border-l-4 border-white hover:border-l-4 hover:border-[#88c2bb]"
          >
            <Image src={logout} alt="logout icon" className="mr-4" />
            Log out
          </Link>
        </div>
        <div className="flex justify-between items-center py-2">
          <h1 className="text-xs">2022@Relu</h1>
          <h1 className="text-xs">Developed by Jagdish</h1>
        </div>
      </div>
    </>
  );
}
