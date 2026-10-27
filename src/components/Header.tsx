import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-start justify-between py-4 px-6">
      <div className="text-foreground text-8xl font-bold cursor-default uppercase">Sophie</div>

      <nav className="flex flex-col gap-1 text-right font-medium">
        <NavLink to="/" className="text-foreground">
          PROJECTS
        </NavLink>

        <NavLink to="/about" className="text-foreground">
          ABOUT
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
