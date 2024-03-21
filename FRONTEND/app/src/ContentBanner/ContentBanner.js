import './ContentBanner.css';

function ContentBanner() {
  return (
    <div>
        <section className="App-content-banner">
            <p className="App-content-banner-title">Онлайн-запись: быстро и удобно!</p>
            <p className="App-content-banner-description">Запись через сайт к специалистам и на диагностику</p>
            <a className="App-content-banner-button-link" href="/">
              <div className="App-content-banner-button-wrapper">
                Записаться
              </div>
            </a>
        </section>

        <section className="App-content-block">
          <p className="App-content-block-title">Медицинский центр «Моя клиника» в Санкт-Петербурге</p>
          <p className="App-content-block-text">«Моя клиника» — это одна из крупнейших в России сетей многопрофильных медицинских центров. В Санкт-Петербурге мы оказываем платную квалифицированную помощь взрослым и детям по шести адресам. Все клиники в СПб работают ежедневно, включая выходные и праздничные дни. <br /><br />Наша команда — это более 1500 специалистов различных областей.</p>
        </section>
    </div>
  );
}

export default ContentBanner;
