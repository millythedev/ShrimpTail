// i love tessa
import React from "react";

// Only reference images from the public/menu folder
const menuImages = [
  "/menu/Page 1 new.png",
  "/menu/page 2 new.png",
  "/menu/page 3 new.png",
  "/menu/page 4 new.png",
  "/menu/breakfast page 1 new.png",
  "/menu/breakfast page 2 new.png",
  "/menu/Breakfast Page 3 new.png",
];

const MenuPages = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black">
    {/* i love tessa */}
    {menuImages.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Menu Page ${idx + 1}`}
        className="max-w-full max-h-[90vh] my-4 rounded-lg shadow-2xl border-4 border-blue-400"
        style={{ background: "#fff" }}
      />
    ))}
  </div>
);
// i love tessa
export default MenuPages;
