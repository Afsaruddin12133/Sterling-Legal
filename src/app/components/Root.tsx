import { MessageCircle } from "lucide-react";
import { Outlet } from "react-router";
import { Footer } from "./Footer";
import { Navigation } from "./Navigation";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      
      </main>
      <Footer />

        
    </div>
  );
}
