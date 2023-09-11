import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { buttonVariants } from "../ui/button";
import { Github, Linkedin } from "lucide-react";

export type TreeProps = {
  label: string;
  href: string;
};

const TREE: TreeProps[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Table",
    href: "/table",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

const Footer = () => (
  <div className="bg-blue-400 border-t-[1px] border-gray-400">
    <Container classes="py-10 text-white flex flex-col sm:flex-row sm:justify-between gap-6">
      <div className="flex flex-col items-center sm:items-start">
        <Image
          src="/logo-white.png"
          alt="Bitwage logo"
          width={120}
          height={24}
        />

        <p className="mt-4 mb-2 text-center sm:text-left">
          <span className="font-bold">Pablo Nicolás Estevez</span>
          <br />
          Buenos Aires, Argentina
          <br />
          September, 2023
        </p>

        <div className="flex items-center gap-2">
          <Link
            href="https://linkedin.com/in/pnestevez/"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Linkedin className="w-6 h-6 fill-white" />
          </Link>

          <Link
            href="https://github.com/pnestevez"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <Github className="w-6 h-6 fill-white" />
          </Link>
        </div>
      </div>

      <div className="text-lg text-center sm:text-right flex flex-col gap-2">
        {TREE.map((l, i) => (
          <Link key={`tree-link-${i}`} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>
    </Container>
  </div>
);

export default Footer;
