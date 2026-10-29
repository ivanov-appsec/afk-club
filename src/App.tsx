import { useState } from 'react'
import './App.css'

const tariffPeriods = [
  { id: 'hour', label: '1 час' },
  { id: 'threeHours', label: '3 часа' },
  { id: 'fiveHours', label: '5 часов' },
  { id: 'night', label: 'Ночь · 22:00–08:00' },
] as const

type TariffPeriodId = (typeof tariffPeriods)[number]['id']

const tariffZones: {
  name: string
  prices: Record<TariffPeriodId, number | null>
}[] = [
  {
    name: 'STANDARD',
    prices: { hour: 170, threeHours: 460, fiveHours: 600, night: 950 },
  },
  {
    name: 'BOOTCAMP',
    prices: { hour: 200, threeHours: 510, fiveHours: 740, night: 1100 },
  },
  {
    name: '3 ROOM',
    prices: { hour: 210, threeHours: 540, fiveHours: 790, night: 1150 },
  },
  {
    name: 'BOOTCAMP 2',
    prices: { hour: 200, threeHours: 510, fiveHours: 740, night: 1100 },
  },
  {
    name: 'PS',
    prices: { hour: 500, threeHours: 1200, fiveHours: null, night: null },
  },
]

const rubleFormatter = new Intl.NumberFormat('ru-RU')

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
  const [selectedPeriod, setSelectedPeriod] =
    useState<TariffPeriodId>('threeHours')

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

        <section className="tariffs-section" id="tariffs" aria-labelledby="tariffs-title">
          <div className="tariffs-heading">
            <p className="eyebrow tariffs-eyebrow">
              <span className="eyebrow-number">02</span>
              <span className="eyebrow-divider" aria-hidden="true" />
              Тарифы
            </p>
            <h2 className="tariffs-title" id="tariffs-title">
              Выбери своё
              <br />
              время.
            </h2>
            <p className="tariffs-description">
              Цена зависит от игровой зоны и продолжительности посещения.
            </p>
          </div>

          <div className="tariffs-content">
            <div className="period-selector" role="group" aria-label="Продолжительность посещения">
              {tariffPeriods.map((period) => (
                <button
                  aria-pressed={selectedPeriod === period.id}
                  className={`period-button${selectedPeriod === period.id ? ' is-selected' : ''}`}
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id)}
                  type="button"
                >
                  {period.label}
                </button>
              ))}
            </div>

            <div className="tariff-list" aria-live="polite">
              {tariffZones.map((zone, index) => {
                const price = zone.prices[selectedPeriod]

                return (
                  <div className="tariff-row" key={zone.name}>
                    <span className="tariff-zone-index">
                      0{index + 1}
                    </span>
                    <h3 className="tariff-zone-name">{zone.name}</h3>
                    <p className={`tariff-price${price === null ? ' is-pending' : ''}`}>
                      {price === null
                        ? 'Стоимость уточняется'
                        : `${rubleFormatter.format(price)} ₽`}
                    </p>
                  </div>
                )
              })}
            </div>

            <aside className="school-offer" aria-labelledby="school-offer-title">
              <div className="school-offer-copy">
                <p className="school-offer-label">Special offer / 01</p>
                <h3 className="school-offer-title" id="school-offer-title">
                  Школьный тариф
                </h3>
                <p className="school-offer-description">
                  Школьный тариф в зоне STANDARD.
                </p>
                <ul className="school-offer-conditions">
                  <li>По будням</li>
                  <li>09:00—17:00</li>
                  <li>Только STANDARD</li>
                </ul>
              </div>
              <p className="school-offer-price">
                <span>3 часа</span>
                300 ₽
              </p>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
