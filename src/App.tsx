import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Pastikan sudah install framer-motion
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // Pastikan sudah install library ini
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// 1. TARUH KOMPONEN LOADING DISINI (DALAM APP.TSX)
const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="w-64 h-64">
        <DotLottieReact
          src="https://lottie.host/66f34d43-bf2d-4b63-ab31-22c439926e54/q4FmFLJfba.lottie"
          loop
          autoplay
        />
      </div>
    </motion.div>
  );
};

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 3 detik
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loader" />
          ) : (
            <div key="content">
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;