import cn from "classnames";
import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
  classes?: string;
};

const Container = ({ children, classes }: ContainerProps): JSX.Element => (
  <section className={cn("w-full max-w-[1072px] px-6 mx-auto", classes)}>
    {children}
  </section>
);

export default Container;
