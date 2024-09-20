
import Header from "./components/header";
import ThemeSwitcher from "./components/theme-switch";

export default function Home() {
   
  return (
    <div className="w-full h-full">
      <Header />
      <main className=" flex gap-4">
        <ThemeSwitcher />
      </main>
      <footer className=""></footer>
    </div>
  );
}
