import { useState } from 'react';

interface Podcast {
  id: number;
  title: string;
  date: string;
  topic: string;
  format: string;
  guests: string[];
  duration?: string;
  views?: number;
  likes?: number;
  rating?: number;
  isMain?: boolean;
}

const podcasts: Podcast[] = [
  {
    id: 1,
    title: "ЯК НЕ ВТРАТИТИ БІЗНЕС ЧЕРЕЗ КРИПТУ | ЮРИДИЧНИЙ РОЗБІР",
    date: "03.09.2026",
    topic: "Криптовалюта та блокчейн",
    format: "Міфи/Розбір з експертами",
    guests: ["Вадим Бурлаков (Crystal Intelligence)", "Ярослав Баєнко (GOLAW)"],
    duration: "1:08:31",
    views: 6119,
    likes: 35,
    rating: 8.7,
    isMain: true,
  },
  {
    id: 2,
    title: "Про ЄСПЛ без міфів: Расім Бабанли",
    date: "03.02.2026",
    topic: "ЄСПЛ та судова система",
    format: "Інтерв'ю з експертом",
    guests: ["Расім Бабанли (Верховний Суд)"],
    rating: 7.8,
  },
  {
    id: 3,
    title: "Інвестиції у відбудову України: ППП",
    date: "20.01.2026",
    topic: "Публічно-приватне партнерство",
    format: "Аналітичний подкаст",
    guests: ["Партнери GOLAW"],
    rating: 7.5,
  },
  {
    id: 4,
    title: "Секретар Великої Палати ВС Віталій Уркевич",
    date: "15.01.2026",
    topic: "Верховний Суд",
    format: "Інтерв'ю з високопосадовцем",
    guests: ["Віталій Уркевич (Велика Палата ВС)"],
    rating: 8.2,
  },
  {
    id: 5,
    title: "ТОП-5 міфів про конституційну скаргу",
    date: "25.11.2025",
    topic: "Конституційне право",
    format: "Розвінчання міфів",
    guests: ["Партнери GOLAW"],
    rating: 7.4,
  },
  {
    id: 6,
    title: "Коли іноземні угоди потребують дозволу на концентрацію",
    date: "24.07.2025",
    topic: "Антимонопольне право",
    format: "Юридичний розбір",
    guests: ["Юристи GOLAW"],
    rating: 7.0,
  },
  {
    id: 7,
    title: "Як бізнесу оскаржити результати податкової перевірки",
    date: "03.07.2025",
    topic: "Податкове право",
    format: "Практичний розбір",
    guests: ["Адвокати GOLAW"],
    rating: 7.6,
  },
  {
    id: 8,
    title: "ТОП-10 міфів про корпоративне право",
    date: "03.07.2025",
    topic: "Корпоративне право",
    format: "Розвінчання міфів",
    guests: ["Партнери GOLAW"],
    rating: 7.9,
  },
  {
    id: 9,
    title: "Конвенція про захист професії адвоката: Валентин Гвоздій",
    date: "29.04.2025",
    topic: "Адвокатська діяльність",
    format: "Інтерв'ю з експертом",
    guests: ["Валентин Гвоздій"],
    rating: 7.3,
  },
  {
    id: 10,
    title: "ТОП-10 податкових міфів: Альона Шапка",
    date: "29.04.2025",
    topic: "Податкове право",
    format: "Розвінчання міфів",
    guests: ["Альона Шапка (GOLAW)"],
    rating: 7.7,
  },
  {
    id: 11,
    title: "Правда про суди: партнерки GOLAW розвінчали міфи",
    date: "26.03.2025",
    topic: "Судова система",
    format: "Розвінчання міфів",
    guests: ["Партнерки GOLAW"],
    rating: 7.5,
  },
];

function StarRating({ rating, max = 10 }: { rating: number; max?: number }) {
  const stars = Math.round((rating / max) * 5 * 2) / 2;
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-lg ${i <= Math.floor(stars) ? 'text-yellow-400' : i - 0.5 <= stars ? 'text-yellow-300' : 'text-gray-300'}`}>
          {i <= Math.floor(stars) ? '★' : i - 0.5 <= stars ? '★' : '☆'}
        </span>
      ))}
      <span className="ml-1 text-sm font-semibold text-gray-700">{rating}/10</span>
    </div>
  );
}

function MetricBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const percentage = (value / max) * 100;
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-bold text-gray-800">{value}/{max}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className={`h-3 rounded-full transition-all duration-700 ${color}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'overview' | 'comparison' | 'all'>('overview');

  const mainPodcast = podcasts[0];
  const otherPodcasts = podcasts.slice(1);
  const avgRating = otherPodcasts.reduce((sum, p) => sum + (p.rating || 0), 0) / otherPodcasts.length;

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
            {[
              { id: 'overview' as const, label: '📊 Огляд подкасту' },
              { id: 'comparison' as const, label: '⚖️ Порівняння' },
              { id: 'all' as const, label: '📋 Усі подкасти' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Main Podcast Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-indigo-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3">
                      🎯 АНАЛІЗОВАНИЙ ПОДКАСТ
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold leading-tight">
                      {mainPodcast.title}
                    </h2>
                    <p className="mt-2 text-blue-100 text-sm">
                      {mainPodcast.date} • {mainPodcast.duration} • {mainPodcast.topic}
                    </p>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold">{mainPodcast.rating}</div>
                    <div className="text-xs text-blue-200">загальна оцінка</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Stats */}
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
                    <div className="text-2xl font-bold text-purple-700">3</div>
                    <div className="text-xs text-purple-500">спікери</div>
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span>👥</span> Спікери
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="font-medium text-sm text-gray-800">Олена Грабовська</div>
                      <div className="text-xs text-gray-500">Модераторка, виконавча директорка GOLAW</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="font-medium text-sm text-gray-800">Вадим Бурлаков</div>
                      <div className="text-xs text-gray-500">Crystal Intelligence, блокчейн-аналітик</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <div className="font-medium text-sm text-gray-800">Ярослав Баєнко</div>
                      <div className="text-xs text-gray-500">Адвокат, судова практика GOLAW</div>
                    </div>
                  </div>
                </div>

                {/* Content Structure */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <span>📝</span> Структура контенту
                  </h3>
                  <div className="space-y-2">
                    {[
                      { time: "00:00", text: "Початок" },
                      { time: "00:56", text: "Представлення теми та спікерів" },
                      { time: "3:14", text: "Міф №1: В Україні неможливо легально будувати блокчейн-бізнес" },
                      { time: "13:03", text: "Міф №2: Блокчейн-операції нереально відстежити" },
                      { time: "26:32", text: "Міф №3: За криптовалюту можна купити будь-що" },
                      { time: "33:54", text: "Міф №4: Юристи не допоможуть у криптосправах" },
                      { time: "44:50", text: "Міф №5: Немає відповідальності за зловживання у крипті" },
                      { time: "58:42", text: "Бліц зі спікерами" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-mono text-xs whitespace-nowrap">{item.time}</span>
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Ratings */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span>📈</span> Детальна оцінка
                  </h3>
                  <MetricBar label="Експертність контенту" value={9} max={10} color="bg-indigo-500" />
                  <MetricBar label="Практична цінність" value={9} max={10} color="bg-blue-500" />
                  <MetricBar label="Структура та формат" value={9} max={10} color="bg-purple-500" />
                  <MetricBar label="Якість спікерів" value={9} max={10} color="bg-green-500" />
                  <MetricBar label="Актуальність теми" value={10} max={10} color="bg-orange-500" />
                  <MetricBar label="Доступність для аудиторії" value={8} max={10} color="bg-pink-500" />
                  <MetricBar label="Виробнича якість" value={7} max={10} color="bg-teal-500" />
                  <MetricBar label="Залученість аудиторії" value={8} max={10} color="bg-amber-500" />
                </div>
              </div>
            </div>

            {/* Verdict */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>✅</span> Загальний вердикт
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>8.7/10</strong> — Це один з найкращих подкастів GOLAW. Висока експертна цінність завдяки 
                поєднанню технологічного погляду (Crystal Intelligence) та юридичного (GOLAW). Формат 
                «розвінчання міфів» працює відмінно — робить складну тему доступною. Тема криптовалют 
                надзвичайно актуальна для бізнес-аудиторії. Наявність таймкодів, чітка структура та 
                практичні поради роблять подкаст корисним ресурсом. Єдиний недолік — технічна складність 
                для непідготовленої аудиторії та середня якість звуку в деяких моментах.
              </p>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-700 text-sm mb-2">💪 Сильні сторони:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Унікальне поєднання технологічної та юридичної експертизи</li>
                    <li>• Надзвичайно актуальна тема для бізнесу</li>
                    <li>• Чітка структура з таймкодами</li>
                    <li>• Практичні поради та реальні кейси</li>
                    <li>• Зовнішній експерт (Crystal Intelligence) додає ваги</li>
                    <li>• Формат бліцу наприкінці — динамічний фінал</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-700 text-sm mb-2">⚠️ Зони покращення:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Технічний жаргон може відлякати новачків</li>
                    <li>• Якість звуку в деяких моментах</li>
                    <li>• Відносно низька кількість лайків (0.57%)</li>
                    <li>• Довгий формат може бути важким для деяких</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="space-y-8">
            {/* Head-to-head comparison */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>⚖️</span> Порівняння з середнім по GOLAW
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Main podcast */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border-2 border-indigo-200">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-indigo-700">{mainPodcast.rating}</div>
                    <div className="text-sm text-indigo-500">Аналізований подкаст</div>
                    <StarRating rating={mainPodcast.rating || 0} />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Формат:</span><span className="font-medium">Міфи + Розбір</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Спікери:</span><span className="font-medium">3 (внутр. + зовн.)</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Тривалість:</span><span className="font-medium">68 хв</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Перегляди:</span><span className="font-medium">6,119</span></div>
                  </div>
                </div>

                {/* Average */}
                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-5 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-gray-600">{avgRating.toFixed(1)}</div>
                    <div className="text-sm text-gray-500">Середнє по GOLAW</div>
                    <StarRating rating={avgRating} />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Формат:</span><span className="font-medium">Переважно інтерв'ю/міфи</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Спікери:</span><span className="font-medium">1-2 (переважно внутр.)</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Тривалість:</span><span className="font-medium">~40-60 хв</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Перегляди:</span><span className="font-medium">~2,000-4,000</span></div>
                  </div>
                </div>
              </div>

              {/* Advantage summary */}
              <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">📊 Переваги аналізованого подкасту:</h4>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">↑</span>
                    <span><strong>+{((mainPodcast.rating || 0) - avgRating).toFixed(1)}</strong> балів до середнього</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Зовнішній експерт (Crystal Intelligence)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Найактуальніша тема серед усіх подкастів</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Найкраща структура (таймкоди, бліц)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Найбільша кількість переглядів</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Найдовший формат — більше глибини</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ranking */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>🏆</span> Рейтинг усіх подкастів GOLAW
              </h2>
              <div className="space-y-3">
                {[...podcasts].sort((a, b) => (b.rating || 0) - (a.rating || 0)).map((podcast, index) => (
                  <div
                    key={podcast.id}
                    className={`flex items-center gap-4 p-3 rounded-xl transition-all ${
                      podcast.isMain
                        ? 'bg-indigo-50 border-2 border-indigo-300 shadow-md'
                        : 'bg-gray-50 border border-gray-100 hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 ? 'bg-yellow-400 text-yellow-900' :
                      index === 1 ? 'bg-gray-300 text-gray-700' :
                      index === 2 ? 'bg-amber-600 text-white' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-gray-800 truncate">{podcast.title}</span>
                        {podcast.isMain && <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full whitespace-nowrap">АНАЛІЗ</span>}
                      </div>
                      <div className="text-xs text-gray-500">{podcast.date} • {podcast.topic}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-800">{podcast.rating}</div>
                      <StarRating rating={podcast.rating || 0} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Format comparison */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-indigo-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span>📊</span> Порівняння за форматами
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-700">Критерій</th>
                      <th className="text-center py-3 px-2 font-semibold text-indigo-700">Крипто-подкаст</th>
                      <th className="text-center py-3 px-2 font-semibold text-gray-700">Інші подкасти</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { criterion: 'Формат', main: 'Міфи + розбір + бліц', others: 'Інтерв\'ю / Міфи' },
                      { criterion: 'Кількість спікерів', main: '3', others: '1-2' },
                      { criterion: 'Зовнішній експерт', main: '✅ Crystal Intelligence', others: '✅ Частково' },
                      { criterion: 'Таймкоди', main: '✅ Детальні', others: '⚠️ Не завжди' },
                      { criterion: 'Практичні кейси', main: '✅ Багато', others: '⚠️ Помірно' },
                      { criterion: 'Технічна глибина', main: 'Висока', others: 'Середня' },
                      { criterion: 'Актуальність', main: '🔥 Дуже висока', others: 'Висока' },
                      { criterion: 'Цільова аудиторія', main: 'Бізнес + IT + юристи', others: 'Юристи + бізнес' },
                      { criterion: 'Engagement', main: '6.1K переглядів', others: '~2-4K' },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="py-3 px-2 font-medium text-gray-700">{row.criterion}</td>
                        <td className="py-3 px-2 text-center text-indigo-700 font-medium">{row.main}</td>
                        <td className="py-3 px-2 text-center text-gray-600">{row.others}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* All Podcasts Tab */}
        {activeTab === 'all' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📋</span> Усі подкасти GOLAW
            </h2>
            {podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className={`bg-white rounded-xl shadow-md p-5 border transition-all hover:shadow-lg ${
                  podcast.isMain ? 'border-indigo-300 ring-2 ring-indigo-100' : 'border-gray-100'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {podcast.isMain && (
                        <span className="bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                          АНАЛІЗОВАНИЙ
                        </span>
                      )}
                      <span className="text-xs text-gray-500">{podcast.date}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">{podcast.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">{podcast.topic}</span>
                      <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">{podcast.format}</span>
                      {podcast.duration && (
                        <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">{podcast.duration}</span>
                      )}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {podcast.guests.map((guest, i) => (
                        <span key={i} className="text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                          👤 {guest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">{podcast.rating}</div>
                      <StarRating rating={podcast.rating || 0} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 px-4 mt-12">
        <div className="max-w-6xl mx-auto text-center text-sm">
          <p>Аналіз подкастів юридичної фірми GOLAW • Дані з YouTube та golaw.ua</p>
          <p className="mt-1 text-gray-500">Оцінки базуються на контенті, форматі, експертності та залученості аудиторії</p>
        </div>
      </footer>
    </div>
  );
}
