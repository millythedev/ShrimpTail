
import { useState } from "react";
import MenuNavigation from "@/components/MenuNavigation";

const BreakfastMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const menuPages = [
    {
      title: "Morning Starters & Coffee",
      items: [
        { name: "Fresh Fruit Bowl", description: "Seasonal fruits with honey drizzle" },
        { name: "Breakfast Pastries", description: "Croissants, muffins, and danish" },
        { name: "Premium Coffee Selection", description: "Espresso, cappuccino, latte" },
        { name: "Fresh Juice Bar", description: "Orange, apple, and seasonal blends" },
      ]
    },
    {
      title: "Hearty Breakfast Plates",
      items: [
        { name: "Classic American Breakfast", description: "Eggs, bacon, hash browns, toast" },
        { name: "Pancake Stack", description: "Fluffy pancakes with maple syrup" },
        { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, peppers, salsa" },
        { name: "Avocado Toast", description: "Multigrain bread, smashed avocado, poached egg" },
      ]
    },
    {
      title: "Healthy Options & Specials",
      items: [
        { name: "Greek Yogurt Parfait", description: "Yogurt, granola, berries, honey" },
        { name: "Oatmeal Bowl", description: "Steel-cut oats with fresh toppings" },
        { name: "Breakfast Smoothie", description: "Protein-packed fruit smoothies" },
        { name: "Chef's Daily Special", description: "Ask your server about today's creation" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <MenuNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        menuType="🌅 Breakfast Menu"
      />

      <div className="pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Page Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            {/* Page Title */}
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              {menuPages[currentPage - 1].title}
            </h2>

            {/* Menu PNG Placeholder */}
            <div className="mb-8">
              <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center border-2 border-dashed border-amber-300">
                <div className="text-center text-amber-700">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-lg font-semibold">Breakfast Menu PNG {currentPage}</div>
                  <div className="text-sm opacity-70">Replace with your menu image</div>
                </div>
              </div>
            </div>

            {/* Menu Items Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuPages[currentPage - 1].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Page Navigation Hint */}
            <div className="text-center mt-8 text-gray-500">
              <p className="text-sm">
                Scroll through pages using the navigation above or swipe on mobile
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakfastMenu;
