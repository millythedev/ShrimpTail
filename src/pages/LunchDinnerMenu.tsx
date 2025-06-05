
import MenuNavigation from "@/components/MenuNavigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const LunchDinnerMenu = () => {
  // 4 pages for lunch & dinner menu
  const menuPages = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <MenuNavigation
        currentPage={1}
        totalPages={4}
        onPageChange={() => {}} // No page change needed for continuous scroll
        menuType="🍽️ Lunch & Dinner Menu"
      />

      <div className="pt-24 pb-8">
        <ScrollArea className="h-[calc(100vh-6rem)]">
          <div className="container mx-auto max-w-2xl px-4">
            {/* Continuous scrollable menu pages */}
            <div className="space-y-4">
              {menuPages.map((pageNumber) => (
                <div
                  key={pageNumber}
                  className="w-full bg-white rounded-lg shadow-lg overflow-hidden"
                  style={{ aspectRatio: '8.5/11' }} // 8.5x11 aspect ratio
                >
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-200 flex items-center justify-center border-2 border-dashed border-red-300">
                    <div className="text-center text-red-700">
                      <div className="text-6xl mb-4">🖼️</div>
                      <div className="text-2xl font-bold mb-2">Lunch & Dinner Menu</div>
                      <div className="text-xl font-semibold">Page {pageNumber}</div>
                      <div className="text-sm opacity-70 mt-2">Replace with your 8.5x11 menu PNG</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default LunchDinnerMenu;
