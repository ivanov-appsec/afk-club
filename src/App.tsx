import './App.css'

const navigationItems = [
  { label: 'Зоны', href: '#zones' },
  { label: 'Тарифы', href: '#tariffs' },
  { label: 'Оборудование', href: '#equipment' },
  { label: 'Контакты', href: '#contacts' },
]

const sectionLinks = [
  { number: '01', label: 'Тарифы', href: '#tariffs' },
  { number: '02', label: 'Игровые зоны', href: '#zones' },
  { number: '03', label: 'Контакты', href: '#contacts' },
]

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="AFK — на главную">
          AFK<span className="wordmark-period">.</span>
        </a>

        <nav className="primary-nav" aria-label="Основная навигация">
          {navigationItems.map((item) => (
            <a className="primary-nav-link" href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="page-content" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-number">01</span>
              <span className="eyebrow-divider" aria-hidden="true" />
              Компьютерный клуб
            </p>

            <h1 className="hero-title" id="hero-title">
              <span>Играй.</span>
              <span>Общайся.</span>
              <span>Отдыхай.</span>
            </h1>

            <p className="hero-description">
              Компьютерный клуб для игры, общения и отдыха — в Йошкар-Оле.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#tariffs">
                Смотреть тарифы <span aria-hidden="true">→</span>
              </a>
              <a className="button button-secondary" href="#zones">
                Игровые зоны
              </a>
            </div>
          </div>

          <figure className="visual-placeholder">
            <div className="visual-artwork" aria-hidden="true">
              <span className="artwork-label artwork-label-top">AFK / 01</span>
              <span className="artwork-cross artwork-cross-horizontal" />
              <span className="artwork-cross artwork-cross-vertical" />
              <span className="artwork-orbit artwork-orbit-outer" />
              <span className="artwork-orbit artwork-orbit-inner" />
              <span className="artwork-sun" />
              <span className="artwork-floor" />
              <span className="artwork-desk artwork-desk-left" />
              <span className="artwork-desk artwork-desk-right" />
              <span className="artwork-screen artwork-screen-left">
                <span />
              </span>
              <span className="artwork-screen artwork-screen-right">
                <span />
              </span>
              <span className="artwork-chair artwork-chair-left" />
              <span className="artwork-chair artwork-chair-right" />
              <span className="artwork-label artwork-label-bottom">
                VISUAL PLACEHOLDER
              </span>
            </div>
            <figcaption className="visual-caption">
              <span>Место для фотографии клуба</span>
              <span className="caption-marker" aria-hidden="true">
                +
              </span>
            </figcaption>
          </figure>
        </section>

        <nav className="section-index" aria-label="Разделы сайта">
          {sectionLinks.map((item) => (
            <a className="section-index-link" href={item.href} key={item.href}>
              <span className="section-index-number">{item.number}</span>
              <span>{item.label}</span>
              <span className="section-index-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </main>
    </div>
  )
}

export default App
