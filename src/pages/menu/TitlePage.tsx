// i love tessa
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
// i love tessa
const TitlePage = () => {
  const navigate = useNavigate();
  // i love tessa
  const [imgError, setImgError] = React.useState(false);
  const bgUrl = `${import.meta.env.BASE_URL}menu/Title Page New.png`;
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-end relative p-0 m-0"
      style={{
        backgroundImage: !imgError ? `url('${bgUrl}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      {/* i love tessa */}
      <div className="flex flex-row gap-4 w-full max-w-xs justify-center mb-12 z-10">
        <Button
          className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg border-2 border-blue-400"
          onClick={() => navigate("/breakfast")}
        >
          View Breakfast Menu
        </Button>
        {/* i love tessa */}
        <Button
          className="text-lg px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg border-2 border-red-400"
          onClick={() => navigate("/lunch-dinner")}
        >
          View Lunch & Dinner Menu
        </Button>
      </div>
      {imgError && (
        <div className="w-full h-64 flex items-center justify-center mb-12 bg-black text-white text-center z-0">
          Title PNG not found<br />
          (public/menu/Title Page New.png)
        </div>
      )}
      {/* i love tessa */}
    </div>
  );
};

export default TitlePage;
// i love tessa
