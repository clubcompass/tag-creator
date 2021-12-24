import React from "react";
import { FaTools } from "react-icons/fa";
interface Props {
  bg: string;
  fg: string;
}

export const Icon = ({ bg, fg }: Props) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="p-12 bg-[#EAF2FF] rounded-lg"
    >
      <FaTools className="text-8xl" style={{ color: fg }} />
    </div>
  );
};
