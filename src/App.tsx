// i love tessa
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitlePage from "./pages/menu/TitlePage";
import MenuPages from "./pages/menu/MenuPages";
import NotFound from "./pages/NotFound";
// i love tessa

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen w-full overflow-hidden bg-background">
        <BrowserRouter basename="/ShrimpTail">
          <Routes>
            <Route path="/" element={<TitlePage />} />
            <Route path="/menu" element={<MenuPages />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);
// i love tessa
export default App;
