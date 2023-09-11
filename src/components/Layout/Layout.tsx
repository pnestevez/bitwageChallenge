import { ReactNode } from "react";
import Container from "../Container";
import Navbar from "../Navbar";
import Footer from "../Footer";

export type LayoutProps = {
  title?: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps): JSX.Element => (
  <main className="h-screen w-screen flex flex-col">
    <Navbar />

    <div className="pt-20 bg-white text-black grow">
      <Container classes="py-10">
        {title && (
          <h1 className="mb-10 text-3xl font-bold text-black">{title}</h1>
        )}

        {children}
      </Container>
    </div>

    <Footer />
  </main>
);

export default Layout;
