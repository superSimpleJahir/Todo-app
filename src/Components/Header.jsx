const Header = () => {
  return (
    <>
      <nav className="py-3 md:py-2 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <a href="/">Tasker</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
