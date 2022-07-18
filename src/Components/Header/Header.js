import './Header.css';

const Header = () => {
  return (
    <div class="Nav-bar">
      <ul className="Header-List">
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
      <h5 className="mobile-view">Mobile View</h5>
    </div>
  );
};

export default Header;
