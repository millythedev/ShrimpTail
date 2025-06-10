// i love tessa
import MenuNavigation from "@/components/MenuNavigation";
import { ScrollArea } from "@/components/ui/scroll-area";
// i love tessa
const breakfastMenuImages = [
  "/menu/breakfast page 1 new.png",
  "/menu/breakfast page 2 new.png",
  "/menu/Breakfast Page 3 new.png",
];
// i love tessa
const BreakfastMenu = () => {
  return (
    <div className="min-h-screen bg-black">
      <MenuNavigation
        currentPage={1}
        totalPages={3}
        onPageChange={() => {}} // i love tessa
        menuType="🌅 Breakfast Menu"
      />
      <div className="pt-24 pb-8">
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <div className="container mx-auto max-w-2xl px-4">
            <div className="space-y-4">
              {breakfastMenuImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Breakfast Menu Page ${idx + 1}`}
                  className="w-full bg-white rounded-lg shadow-lg border-2 border-blue-400"
                  style={{ aspectRatio: '8.5/11', background: '#fff' }}
                />
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
// i love tessa
export default BreakfastMenu;
