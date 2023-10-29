import { FC } from "react";

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = "Rick and Morty Characters" }) => {
  return <h2>{title}</h2>;
};