'use client';

import Link from 'next/link';
import NavBar from './NavBar';
import { MENU } from './menu';

export default function Home() {
  const frequentModules = MENU.filter(m => ['/dolgozok', '/efo-naplo', '/napi-tervezo'].includes(m.href));

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavBar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 flex flex-col gap-10">
        
        {/* Értesítések és Teendők */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">notifications_active</span>
            Értesítések és Teendők
          </h2>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col divide-y divide-slate-100">
             <div className="p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                   <span className="material-symbols-outlined">warning</span>
                </div>
                <div>
                   <h3 className="font-semibold text-slate-800">Lejárt orvosi alkalmassági (2 fő)</h3>
                   <p className="text-sm text-slate-600 mt-1">A "MINTA Kft."-nél 2 dolgozónak lejárt az orvosi alkalmasságija.</p>
                   <Link href="/dolgozok" className="text-sm font-medium text-blue-600 hover:underline mt-2 inline-block">Részletek megtekintése &rarr;</Link>
                </div>
             </div>
             <div className="p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                   <span className="material-symbols-outlined">pending_actions</span>
                </div>
                <div>
                   <h3 className="font-semibold text-slate-800">NAV-import ellenőrzés szükséges</h3>
                   <p className="text-sm text-slate-600 mt-1">A tegnapi EFO bejelentések feldolgozása befejeződött, ellenőrizd a státuszokat.</p>
                   <Link href="/nav-import" className="text-sm font-medium text-blue-600 hover:underline mt-2 inline-block">Tovább az importra &rarr;</Link>
                </div>
             </div>
          </div>
        </section>

        {/* Gyakori modulok */}
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">star</span>
            Gyakori Modulok
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frequentModules.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                className="group bg-white rounded-xl border border-slate-200 p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[170px] transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-[0_10px_24px_-6px_rgba(37,99,235,0.25)]"
              >
                <span className="material-symbols-outlined text-[34px] text-blue-600 bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors rounded-2xl p-4">
                  {m.icon}
                </span>
                <span className="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{m.label}</span>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}