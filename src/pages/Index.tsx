
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger logo animation after component mounts
    const timer = setTimeout(() => {
      setLogoLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-orange-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-amber-300 rounded-full blur-xl"></div>
      </div>

      {/* Animated Logo Container */}
      <div className="relative z-10 mb-12">
        <div
          className={`transition-all duration-2000 ease-out ${
            logoLoaded
              ? "transform scale-100 opacity-100 translate-y-0"
              : "transform scale-0 opacity-0 translate-y-[-200px]"
          }`}
        >
          {/* Logo Placeholder - Flying Shrimp Airplane */}
          <div className="w-64 h-64 mx-auto mb-8 relative">
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <div className="text-white text-center">
                <div className="text-6xl mb-2">🦐</div>
                <div className="text-4xl">✈️</div>
                <div className="text-lg font-bold mt-2">LOGO</div>
                <div className="text-sm opacity-80">Replace with your PNG</div>
              </div>
            </div>
            {/* Flying trail effect */}
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 bg-white rounded-full opacity-60 animate-pulse`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Text */}
      <div
        className={`text-center mb-12 transition-all duration-1000 delay-1000 ${
          logoLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Welcome to Our Restaurant
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Choose your dining experience and explore our delicious menu options
        </p>
      </div>

      {/* Menu Selection Buttons */}
      <div
        className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-1500 ${
          logoLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Button
          onClick={() => navigate("/breakfast")}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
        >
          🌅 Breakfast Menu
        </Button>
        
        <Button
          onClick={() => navigate("/lunch-dinner")}
          className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
        >
          🍽️ Lunch & Dinner
        </Button>
      </div>

      {/* Decorative bottom text */}
      <div
        className={`absolute bottom-8 text-center text-gray-500 transition-all duration-1000 delay-2000 ${
          logoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm">Fresh ingredients • Made with love • Served with pride</p>
      </div>
    </div>
  );
};

export default Index;
