import React, { ReactChild, useState } from "react";
import { FaTools, FaPaintRoller } from "react-icons/fa";
import { BsFillPeopleFill, BsFillTerminalFill } from "react-icons/bs";
import { BiAtom } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { MdSell } from "react-icons/md";
interface Props {
  fg: string;
  bg: string;
}

export const IconOptions = ({ fg, bg }: Props): JSX.Element => {
  const icons = [
    <FaTools />,
    <BsFillPeopleFill />,
    <BsFillTerminalFill />,
    <BiAtom />,
    <AiFillHeart />,
    <FaPaintRoller />,
    <MdSell />,
  ];
  return (
    <div className="grid grid-flow-row grid-cols-9 gap-2">
      {icons.map((icon, index) => (
        <Template key={index} fg={fg} bg={bg}>
          {icon}
        </Template>
      ))}
    </div>
  );
};

const Template = ({
  children,
  fg,
  bg,
}: {
  children: ReactChild;
  fg: string;
  bg: string;
}) => {
  //   const [active, setActive] = useState<boolean>(false);
  return (
    <div
      //   onClick={() => {
      //     setActive(!active);
      //   }}
      style={{ backgroundColor: bg, color: fg }}
      className="w-fit h-fit p-2 text-base rounded-md"
      //   className={`${
      //     active ? "bg-blue-100 text-blue-500" : "bg-gray-100 text-gray-500"
      //   } w-fit h-fit p-2 text-base rounded-md cursor-pointer`}
    >
      {children}
    </div>
  );
};
