import { colors } from "../colors";

export const Toolbar = () => {
  return (
    <div
      className="hidden items-center justify-between px-8 py-2 text-xs md:flex"
      style={{ background: colors.tealDeep, color: colors.creamDim }}
    >
      <div className="flex gap-6">
        <span>+880 1912 345 678</span>
        <span>Mon – Sunday, 9:00 – 18:00</span>
      </div>
      <div className="flex gap-4">
        <span>18 Willow Lane, Sylhet</span>
      </div>
    </div>
  );
};
