import Navigation from "../../Navigation/Navigation";

const Header = (props) => {
  return (
    <section className="sticky top-0 z-50 w-screen h-16 bg-slate-50/95">
      <div className="container h-full max-w-screen-xl px-4 mx-auto">
        <Navigation />
      </div>
    </section>
  );
};

export default Header;
