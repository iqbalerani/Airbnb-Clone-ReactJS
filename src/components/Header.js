import Logo from "../A_Logo.png";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={Logo} alt="React-icon" className="nav-logo"></img>
      </nav>
    </header>
  );
}

export default Header;
