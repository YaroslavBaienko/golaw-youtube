import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'all'>('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-900 text-white py-8 px-4 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-2xl">⚖️</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold">GOLAW Подкаст Аналіз</h1>
          </div>
          <p className="text-blue-200 text-sm md:text-base ml-13">
            Оцінка та порівняння подкасту «ЯК НЕ ВТРАТИТИ БІЗНЕС ЧЕРЕЗ КРИПТУ» з усіма подкастами GOLAW
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📊 Огляд подкасту
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'comparison' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              ⚖️ Порівняння
            </button>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📋 Усі подкасти
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3">
                  🎯 АНАЛІЗОВАНИЙ ПОДКАСТ
                </span>
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  ЯК НЕ ВТРАТИТИ БІЗНЕС ЧЕРЕЗ КРИПТУ | ЮРИДИЧНИЙ РОЗБІР
                </h2>
                <p className="mt-2 text-blue-100 text-sm">
                  03.09.2026 • 1:08:31 • Криптовалюта та блокчейн
                </p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-700">6,119</div>
                    <div className="text-xs text-blue-500">переглядів</div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-red-600">35</div>
                    <div className="text-xs text-red-400">лайків</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-700">1:08:31</div>
                    <div className="text-xs text-green-500">тривалість</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-700">8.7</div>
                    <div className="text-xs text-purple-500">загальна оцінка</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-3">✅ Загальний вердикт</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>8.7/10</strong> — Один з найкращих подкастів GOLAW. Висока експертна цінність завдяки 
                    поєднанню технологічного погляду (Crystal Intelligence) та юридичного (GOLAW). Формат 
                    «розвінчання міфів» працює відмінно — робить складну тему доступною.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">⚖️ Рейтинг усіх подкастів GOLAW</h2>
            <div className="space-y-3">
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
                  className={`flex items-center gap-4 p-3 rounded-xl ${
                    podcast.isMain ? 'bg-indigo-50 border-2 border-indigo-300' : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0 ? 'bg-yellow-400 text-yellow-900' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-gray-800">{podcast.title}</span>
                      {podcast.isMain && <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">АНАЛІЗ</span>}
                    </div>
                    <div className="text-xs text-gray-500">{podcast.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg text-gray-800">{podcast.rating}</div>
                    <div className="text-xs text-gray-500">/10</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'all' && (
          <div className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">📋 Усі подкасти GOLAW</h2>
            <p className="text-gray-600">Повний список подкастів юридичної фірми GOLAW з детальними оцінками та аналізом.</p>
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>Аналіз подкастів юридичної фірми GOLAW • Дані з YouTube та golaw.ua</p>
        </div>
      </footer>
    </div>
  );
}
