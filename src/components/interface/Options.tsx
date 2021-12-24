import { useState } from "react";
import convert from "color-convert";
import { HexColorPicker } from "react-colorful";
import { Tag } from "..";
import { Icon } from "..";
import { Output } from "../Output";
import { IconOptions } from "./IconOptions";

interface Options {
  label: string;
  bg: string;
  size: "large" | "regular";
}

export const Options = () => {
  const [label, setLabel] = useState<string>("math");
  const [bg, setBgColor] = useState<string>("#F3DCFF");
  const [fg, setFgColor] = useState<string>("#C050FA");
  const [size, setSize] = useState<"large" | "regular">("large");

  const matchHue = ({ bg, fg }: { bg: string; fg: string }): string => {
    const [h, ...sl] = convert.hex.hsl(bg);
    const [h2, ...sl2] = convert.hex.hsl(fg);
    const hex = convert.hsl.hex([h, ...sl2]);
    console.log(hex);
    return `#${hex}`;
  };

  const options: Options = {
    label,
    bg,
    size,
  };

  const str = JSON.stringify(
    {
      [label]: {
        bg: bg,
        fg: fg,
      },
    },
    null,
    2
  );

  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <div className="flex flex-row gap-9 justify-center">
        <div className="flex flex-col items-center gap-4">
          <HexColorPicker
            color="#F3DCFF"
            onChange={(color) => setBgColor(color)}
          />
          <div className="flex flex-col gap-4">
            <input
              className="font-medium px-4 py-2 rounded-lg border-2"
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <Tag {...options} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <HexColorPicker color={fg} onChange={(color) => setFgColor(color)} />
          <div className="flex flex-col gap-4">
            <Icon bg={bg} fg={fg} />
          </div>
        </div>
      </div>

      <div className="inline-flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2">
          <span className="text-sm font-bold text-[#344357]">Preview:</span>{" "}
          <div className="w-fit">
            <Tag label={label} bg={bg} size="regular" />
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-8 h-8 rounded-md" style={{ backgroundColor: bg }} />
          <div className="w-8 h-8 rounded-md" style={{ backgroundColor: fg }} />
          <button
            style={{ backgroundColor: bg, color: fg }}
            onClick={() => setFgColor(matchHue({ bg, fg }))}
            className="px-2.5 py-[0.05rem] rounded-md
       flex items-center justify-center uppercase font-extrabold"
          >
            Match Hue
          </button>
        </div>

        <Output string={str} />
        <IconOptions fg={fg} bg={bg} />
      </div>
    </div>
  );
};
