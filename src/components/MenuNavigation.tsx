
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MenuNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  menuType: string;
}

const MenuNavigation = ({ menuType }: MenuNavigationProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm shadow-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Home Button */}
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="hover:bg-blue-950 border-blue-400 text-blue-400 hover:text-blue-300"
        >
          🏠 Home
        </Button>

        {/* Menu Title */}
        <h1 className="text-2xl font-bold text-white">{menuType}</h1>

        {/* Scroll hint */}
        <div className="text-sm text-gray-400">
          Scroll to browse menu
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
