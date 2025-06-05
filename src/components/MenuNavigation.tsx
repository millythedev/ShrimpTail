
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowDown, ArrowUp } from "lucide-react";

interface MenuNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  menuType: string;
}

const MenuNavigation = ({ currentPage, totalPages, onPageChange, menuType }: MenuNavigationProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Home Button */}
        <Button
          onClick={() => navigate("/")}
          variant="outline"
          className="hover:bg-orange-50 border-orange-300"
        >
          🏠 Home
        </Button>

        {/* Menu Title */}
        <h1 className="text-2xl font-bold text-gray-800">{menuType}</h1>

        {/* Page Navigation */}
        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
            className="hover:bg-orange-50"
          >
            <ArrowUp className="w-4 h-4" />
          </Button>
          
          <span className="text-sm text-gray-600 px-3">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
            className="hover:bg-orange-50"
          >
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuNavigation;
