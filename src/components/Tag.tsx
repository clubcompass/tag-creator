interface Props {
  label: string;
  bg: string;
  size: "large" | "regular";
}

export const Tag = ({ label, bg, size }: Props): JSX.Element => {
  return (
    <span
      style={{ backgroundColor: bg }}
      className={`${
        size === "large"
          ? "text-[3rem] px-6 py-1 rounded-md"
          : size === "regular"
          ? "text-[0.6rem] px-2.5 py-[0.05rem] rounded-sm"
          : "text-[0.6rem] px-2.5 py-[0.05rem] rounded-sm"
      } flex items-center justify-center uppercase font-extrabold text-[#344357]`}
    >
      {label}
    </span>
  );
};
