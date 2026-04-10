import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-[var(--gold)] text-[var(--navy)] rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="Chat support"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
