import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import cn from "classnames";
import { buttonVariants } from "../ui/button";
import { LayoutDashboard, Table, User } from "lucide-react";

const Navbar = () => (
  <header className="w-full h-20 bg-white shadow-lg fixed top-0 left-0 z-10">
    <Container classes="text-black h-full flex items-center justify-between gap-4">
      <Link href="/">
        <Image
          src="/logo-light-blue.png"
          alt="Bitwage logo"
          width={150}
          height={32}
          className="hidden sm:flex"
        />

        <Image
          src="/logo-light-blue-mini.png"
          alt="Bitwage logo"
          width={32}
          height={32}
          className="flex sm:hidden"
        />
      </Link>

      <div className="flex items-center justify-end gap-2">
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants(),
            "flex items-center gap-2 transition-all duration-200 ease-in-out"
          )}
        >
          <LayoutDashboard className="w-4 h-4" />
          <div className="hidden sm:flex">Dasboard</div>
        </Link>

        <Link
          href="/table"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "flex items-center gap-2"
          )}
        >
          <Table className="w-4 h-4" />
          <div className="hidden sm:flex ">Table</div>
        </Link>

        <Link
          href="/profile"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <User className="w-6 h-6" />
        </Link>
      </div>
    </Container>
  </header>
);

export default Navbar;
