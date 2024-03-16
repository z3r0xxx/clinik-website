import './Header.css';
import logo from '../logo_mob.png';

function Header() {
  return (
    <div>
        <div className="App-header-banner">
            <p className="App-header-banner-text">Круглосуточная помощь по телефону: <p className="App-header-banner-phone">+7 (999) 123-45-67</p></p>
        </div>

        <header className="App-header">
            <div className="App-header-nav-container">
                <img src={logo} className="App-logo" alt="logo" />
                <nav className="App-header-nav">
                    <ul>
                        <li>
                            <a className="App-DefaultLink" href="/">Услуги</a>
                        </li>
                        <li>
                            <a className="App-DefaultLink" href="/">Врачи</a>
                        </li>
                        <li>
                            <a className="App-DefaultLink" href="/">Цены</a>
                        </li>
                        <li>
                            <a className="App-DefaultLink" href="/">О клинике</a>
                        </li>
                        <li>
                            <a className="App-DefaultLink" href="/">Отзывы</a>
                        </li>
                        <li>
                            <a className="App-DefaultLink" href="/">Контакты</a>
                        </li>
                    </ul>
                </nav>

                <div className="App-User">
                    <a className="App-DefaultLink" href="/">Войти</a>
                </div>
            </div>
        </header>
    </div>
  );
}

export default Header;
