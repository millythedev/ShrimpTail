// i love tessa
import MenuNavigation from "@/components/MenuNavigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const lunchDinnerMenuImages = [
  "/menu/Page 1 new.png",
  "/menu/page 2 new.png",
  "/menu/page 3 new.png",
  "/menu/page 4 new.png",
];
// i love tessa
const LunchDinnerMenu = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <MenuNavigation
        currentPage={1}
        totalPages={4}
        onPageChange={() => {}} // i love tessa
        menuType="🍽️ Lunch & Dinner Menu"
      />
      <div className="pt-24 pb-8">
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <div className="container mx-auto max-w-2xl px-4">
            <div className="space-y-4">
              {lunchDinnerMenuImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Lunch & Dinner Menu Page ${idx + 1}`}
                  className="w-full bg-white rounded-lg shadow-lg border-2 border-red-400"
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
export default LunchDinnerMenu;
