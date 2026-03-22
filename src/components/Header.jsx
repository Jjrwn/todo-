function Header({ title }) {
  return (
    <header
      className="sticky top-0 z-10 h-20 px-8 flex items-center justify-between 
    border-b bg-[#E3E3E3] shadow-sm"
    >
      <h1 className="text-2xl font-semibold text-[#1B3C53]">{title}</h1>
    </header>
  );
}

export default Header;
