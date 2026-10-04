'use client';

import Link from 'next/link';
import { MENU } from './menu';

export default function NavBar({ title }: { title?: string }) {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#0f2a5c] via-[#1d4ed8] to-[#2563eb] text-white shadow-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="flex items-center gap-6 px-6 h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
            <span className="material-symbols-outlined bg-white/15 rounded-lg p-1">payments</span>
            BérFlow
          </Link>

          {/* Főmenü lenyíló */}
          <div className="relative group">
            <button className="flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-lg px-4 py-2 text-sm font-semibold">
              <span className="material-symbols-outlined text-[20px]">menu</span>
              Főmenü
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:rotate-180">expand_more</span>
            </button>
            <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 transition-all duration-150 absolute left-0 top-full pt-2">
              <ul className="w-80 bg-white text-slate-800 rounded-xl border border-slate-200 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.18)] py-2">
                {MENU.map((m) => (
                  <li key={m.href} className="relative group/item">
                    <Link href={m.href} className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors">
                      <span className="material-symbols-outlined text-[20px] text-blue-600">{m.icon}</span>
                      <span className="flex-1">{m.label}</span>
                      {m.children && <span className="material-symbols-outlined text-[18px] text-slate-400">chevron_right</span>}
                    </Link>
                    {m.children && (
                      <div className="invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition-all duration-150 absolute left-full top-0 pl-1">
                        <ul className="w-56 bg-white rounded-xl border border-slate-200 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.18)] py-2">
                          {m.children.map((c) => (
                            <li key={c.href}>
                              <Link href={c.href} className="block px-4 py-2.5 text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {title && <h1 className="text-base font-semibold text-white/90 hidden md:block">{title}</h1>}

          <div className="ml-auto flex items-center gap-4 text-sm">
            <span className="material-symbols-outlined text-white/80 hover:text-white cursor-pointer" title="Profil">account_circle</span>
          </div>
        </div>
      </header>
    </>
  );
}
