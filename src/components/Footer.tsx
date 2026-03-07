export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Identity */}
          <div>
            <p className="text-white font-semibold mb-1">
              Project / Delivery Manager
            </p>
            <p className="text-slate-500 text-sm">Портфолио · {year}</p>
          </div>

          {/* Contacts */}
          <nav aria-label="Контакты">
            <ul className="flex flex-col sm:flex-row gap-4">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452H17.21v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.044c.431-.818 1.485-1.681 3.057-1.681 3.269 0 3.873 2.151 3.873 4.949v6.623zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.6 13.019H3.737V9h3.2v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn (заполни ссылку)
                </a>
              </li>
              <li>
                <a
                  href="mailto:your@email.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  Почта
                </a>
              </li>
              <li>
                <span className="text-sm text-slate-500 flex items-center gap-2">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
                    />
                  </svg>
                  Город
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
