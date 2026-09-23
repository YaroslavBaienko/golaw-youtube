export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 50%, #eef2ff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(to right, #312e81, #1e3a8a, #581c87)',
        color: 'white',
        padding: '2rem 1rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>
              ⚖️
            </div>
            <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', margin: 0 }}>
              GOLAW Подкаст Аналіз
            </h1>
          </div>
          <p style={{ color: '#bfdbfe', fontSize: '0.875rem', marginLeft: '3.25rem' }}>
            Оцінка та порівняння подкасту «ЯК НЕ ВТРАТИТИ БІЗНЕС ЧЕРЕЗ КРИПТУ»
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
        {/* Main Podcast Card */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          border: '1px solid #e0e7ff',
          marginBottom: '2rem'
        }}>
          <div style={{
            background: 'linear-gradient(to right, #4f46e5, #9333ea)',
            padding: '1.5rem',
            color: 'white'
          }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.2)',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: '500',
              marginBottom: '0.75rem'
            }}>
              🎯 АНАЛІЗОВАНИЙ ПОДКАСТ
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>
              ЯК НЕ ВТРАТИТИ БІЗНЕС ЧЕРЕЗ КРИПТУ
            </h2>
            <p style={{ color: '#c7d2fe', fontSize: '0.875rem', margin: 0 }}>
              03.09.2026 • 1:08:31 • Криптовалюта та блокчейн
            </p>
          </div>

          <div style={{ padding: '1.5rem' }}>
            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              <div style={{ background: '#eff6ff', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1d4ed8' }}>6,119</div>
                <div style={{ fontSize: '0.75rem', color: '#3b82f6' }}>переглядів</div>
              </div>
              <div style={{ background: '#fef2f2', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>35</div>
                <div style={{ fontSize: '0.75rem', color: '#f87171' }}>лайків</div>
              </div>
              <div style={{ background: '#f0fdf4', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#15803d' }}>1:08:31</div>
                <div style={{ fontSize: '0.75rem', color: '#22c55e' }}>тривалість</div>
              </div>
              <div style={{ background: '#faf5ff', borderRadius: '0.75rem', padding: '1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7e22ce' }}>8.7</div>
                <div style={{ fontSize: '0.75rem', color: '#a855f7' }}>оцінка /10</div>
              </div>
            </div>

            {/* Verdict */}
            <div style={{
              background: 'linear-gradient(to right, #f0fdf4, #ecfdf5)',
              borderRadius: '0.75rem',
              padding: '1.25rem',
              border: '1px solid #bbf7d0'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#166534', margin: '0 0 0.75rem 0' }}>
                ✅ Загальний вердикт
              </h3>
              <p style={{ color: '#374151', lineHeight: '1.6', margin: 0 }}>
                <strong>8.7/10</strong> — Один з найкращих подкастів GOLAW. Висока експертна цінність завдяки 
                поєднанню технологічного погляду (Crystal Intelligence) та юридичного (GOLAW). Формат 
                «розвінчання міфів» працює відмінно.
              </p>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div style={{
          background: 'white',
          borderRadius: '1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          padding: '1.5rem',
          border: '1px solid #e0e7ff'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', margin: '0 0 1.5rem 0' }}>
            🏆 Рейтинг усіх подкастів GOLAW
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { title: "ЯК НЕ ВТРАТИТИ БІЗНЕС ЧЕРЕЗ КРИПТУ", date: "03.09.2026", rating: 8.7, isMain: true },
              { title: "Секретар Великої Палати ВС Віталій Уркевич", date: "15.01.2026", rating: 8.2 },
              { title: "ТОП-10 міфів про корпоративне право", date: "03.07.2025", rating: 7.9 },
              { title: "Про ЄСПЛ без міфів: Расім Бабанли", date: "03.02.2026", rating: 7.8 },
              { title: "ТОП-10 податкових міфів: Альона Шапка", date: "29.04.2025", rating: 7.7 },
              { title: "Як бізнесу оскаржити результати податкової перевірки", date: "03.07.2025", rating: 7.6 },
              { title: "Інвестиції у відбудову України: ППП", date: "20.01.2026", rating: 7.5 },
              { title: "Правда про суди: партнерки GOLAW", date: "26.03.2025", rating: 7.5 },
              { title: "ТОП-5 міфів про конституційну скаргу", date: "25.11.2025", rating: 7.4 },
              { title: "Конвенція про захист професії адвоката", date: "29.04.2025", rating: 7.3 },
              { title: "Коли іноземні угоди потребують дозволу на концентрацію", date: "24.07.2025", rating: 7.0 },
            ].map((podcast, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.75rem',
                  borderRadius: '0.75rem',
                  background: podcast.isMain ? '#eef2ff' : '#f9fafb',
                  border: podcast.isMain ? '2px solid #a5b4fc' : '1px solid #f3f4f6'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.875rem',
                  background: index === 0 ? '#facc15' : '#e5e7eb',
                  color: index === 0 ? '#78350f' : '#4b5563'
                }}>
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: '500', fontSize: '0.875rem', color: '#1f2937' }}>
                      {podcast.title}
                    </span>
                    {podcast.isMain && (
                      <span style={{
                        background: '#4f46e5',
                        color: 'white',
                        fontSize: '0.75rem',
                        padding: '0.125rem 0.5rem',
                        borderRadius: '9999px'
                      }}>
                        АНАЛІЗ
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{podcast.date}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#1f2937' }}>{podcast.rating}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>/10</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer style={{
        background: '#111827',
        color: '#9ca3af',
        padding: '1.5rem 1rem',
        marginTop: '3rem',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <p>Аналіз подкастів юридичної фірми GOLAW • Дані з YouTube та golaw.ua</p>
      </footer>
    </div>
  );
}
