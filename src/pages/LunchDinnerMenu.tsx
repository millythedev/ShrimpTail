
import { useState } from "react";
import MenuNavigation from "@/components/MenuNavigation";

const LunchDinnerMenu = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const menuPages = [
    {
      title: "Appetizers & Starters",
      items: [
        { name: "Shrimp Cocktail", description: "Fresh shrimp with cocktail sauce" },
        { name: "Calamari Rings", description: "Crispy fried with marinara sauce" },
        { name: "Bruschetta", description: "Toasted bread with tomato and basil" },
        { name: "Wings Platter", description: "Choice of sauce: buffalo, BBQ, or garlic" },
      ]
    },
    {
      title: "Soups & Salads",
      items: [
        { name: "Clam Chowder", description: "Creamy New England style" },
        { name: "Caesar Salad", description: "Romaine, croutons, parmesan, caesar dressing" },
        { name: "Garden Fresh Salad", description: "Mixed greens with seasonal vegetables" },
        { name: "Soup of the Day", description: "Ask your server for today's selection" },
      ]
    },
    {
      title: "Main Courses",
      items: [
        { name: "Grilled Salmon", description: "Atlantic salmon with lemon herb butter" },
        { name: "Ribeye Steak", description: "12oz aged beef with garlic mashed potatoes" },
        { name: "Pasta Primavera", description: "Fresh vegetables in creamy alfredo sauce" },
        { name: "Lobster Roll", description: "Fresh lobster on a toasted brioche roll" },
      ]
    },
    {
      title: "Desserts & Beverages",
      items: [
        { name: "Chocolate Lava Cake", description: "Warm cake with vanilla ice cream" },
        { name: "Key Lime Pie", description: "Tangy lime filling with graham crust" },
        { name: "Craft Beer Selection", description: "Local and imported beer options" },
        { name: "Wine List", description: "Carefully curated wine selection" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <MenuNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        menuType="🍽️ Lunch & Dinner Menu"
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
              <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-200 rounded-xl flex items-center justify-center border-2 border-dashed border-red-300">
                <div className="text-center text-red-700">
                  <div className="text-4xl mb-2">🖼️</div>
                  <div className="text-lg font-semibold">Lunch & Dinner Menu PNG {currentPage}</div>
                  <div className="text-sm opacity-70">Replace with your menu image</div>
                </div>
              </div>
            </div>

            {/* Menu Items Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuPages[currentPage - 1].items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Page Navigation Hint */}
            <div className="text-center mt-8 text-gray-500">
              <p className="text-sm">
                Navigate through all {totalPages} pages using the controls above
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LunchDinnerMenu;
