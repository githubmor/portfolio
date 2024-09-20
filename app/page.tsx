"use client";

import ThemeSwitcher from "./components/theme-switch";

export default function Home() {
   
  return (
    <div className="w-full h-full">
      <main className=" flex gap-4">
        <ThemeSwitcher />
        <div className="bg-primary w-40 h-40">Primary</div>
        <div className="bg-secondary w-40 h-40">Secondary</div>
        <div className="bg-accent w-40 h-40">Accent</div>
        <div className="bg-grey w-40 h-40">Grey</div>
        <div className="bg-grey-100 w-40 h-40">Grey 100</div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
