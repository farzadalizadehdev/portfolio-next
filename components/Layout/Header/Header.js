import Navigation from "../../Navigation/Navigation";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-16 bg-white dark:bg-neutral-900">
      <div className="container w-full h-full max-w-screen-xl px-4 mx-auto">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
