
import MenuNavigation from "@/components/MenuNavigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const BreakfastMenu = () => {
  // 3 pages for breakfast menu
  const menuPages = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-black">
      <MenuNavigation
        currentPage={1}
        totalPages={3}
        onPageChange={() => {}} // No page change needed for continuous scroll
        menuType="🌅 Breakfast Menu"
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
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-2 border-dashed border-blue-300">
                    <div className="text-center text-blue-700">
                      <div className="text-6xl mb-4">🖼️</div>
                      <div className="text-2xl font-bold mb-2">Breakfast Menu</div>
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

export default BreakfastMenu;
