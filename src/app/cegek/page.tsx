'use client';

import { useState } from 'react';
import NavBar from '../NavBar';

const mockCegek = [
  { id: 1, cegkod: 'MINTA01', nev: 'Minta Kft.', adoszam: '12345678-2-41', kapcsolattarto: 'Kovács János', berprogram: 'Kulcs-Soft', aktiv: true, megjegyzes: 'Kiemelt ügyfél' },
  { id: 2, cegkod: 'TEST02', nev: 'Teszt Bt.', adoszam: '87654321-1-42', kapcsolattarto: 'Szabó Mária', berprogram: 'NEXON', aktiv: true, megjegyzes: '' },
  { id: 3, cegkod: 'ALFA03', nev: 'Alfa Zrt.', adoszam: '11223344-2-43', kapcsolattarto: 'Nagy Péter', berprogram: 'RLB', aktiv: false, megjegyzes: 'Szerződés felfüggesztve' },
];

export default function CegekPage() {
  const [filterCegkod, setFilterCegkod] = useState('');
  const [filterNev, setFilterNev] = useState('');
  const [filterAdoszam, setFilterAdoszam] = useState('');
  const [filterAktiv, setFilterAktiv] = useState(true);

  const filteredCegek = mockCegek.filter(c => {
    return (
      c.cegkod.toLowerCase().includes(filterCegkod.toLowerCase()) &&
      c.nev.toLowerCase().includes(filterNev.toLowerCase()) &&
      c.adoszam.includes(filterAdoszam) &&
      (filterAktiv ? c.aktiv === true : true)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavBar title="Cégek Kezelése" />
      <main className="flex-1 w-full px-6 py-6 flex flex-col gap-4">
        {/* Szűrők */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-6 items-end">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Cégkód</label>
            <input 
              type="text" 
              value={filterCegkod}
              onChange={(e) => setFilterCegkod(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
              placeholder="Keresés..."
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Cégnév</label>
            <input 
              type="text" 
              value={filterNev}
              onChange={(e) => setFilterNev(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
              placeholder="Keresés..."
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Adószám</label>
            <input 
              type="text" 
              value={filterAdoszam}
              onChange={(e) => setFilterAdoszam(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
              placeholder="Keresés..."
            />
          </div>
          <div className="flex items-center gap-2 pb-2">
            <input 
              type="checkbox" 
              id="aktiv-szuro"
              checked={filterAktiv}
              onChange={(e) => setFilterAktiv(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <label htmlFor="aktiv-szuro" className="text-sm font-medium text-slate-700 cursor-pointer">Csak aktív cégek</label>
          </div>
        </div>

        {/* Táblázat */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-500 border-b border-slate-200 text-xs uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">
                    <div className="flex items-center gap-1 cursor-help" title="Rövid, egyedi azonosító, például MINTA01. Később ugyanígy kell kiválasztani minden lapon. Ne változtasd meg utólag.">
                      Cégkód <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="flex items-center gap-1 cursor-help" title="A munkáltató teljes hivatalos neve. Ne a telephely vagy márkanév szerepeljen, ha az eltér a jogi névtől.">
                      Cégnév <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="flex items-center gap-1 cursor-help" title="A munkáltató hivatalos adószáma. Pontosan ellenőrizd a törzsadat alapján.">
                      Adószám <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="flex items-center gap-1 cursor-help" title="A felelős személy neve, szükség esetén elérhetősége. Belső használatra szolgál.">
                      Kapcsolattartó <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="flex items-center gap-1 cursor-help" title="RLB, Novitax, Kulcs-Bér, NEXON vagy más rendszer neve. Ez jelenik meg az átadó nézetben.">
                      Bérprogram <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1 cursor-help" title="Igen vagy Nem. Inaktív céget ne használj új rögzítéshez.">
                      Aktív? <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                  <th className="px-4 py-3">
                    <div className="flex items-center gap-1 cursor-help" title="Opcionális belső információ. Ne írj ide különleges kategóriájú, szükségtelen személyes adatot.">
                      Megjegyzés <span className="material-symbols-outlined text-[14px] opacity-70">info</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredCegek.map((ceg) => (
                  <tr key={ceg.id} className="hover:bg-blue-50/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-slate-900">{ceg.cegkod}</td>
                    <td className="px-4 py-3">{ceg.nev}</td>
                    <td className="px-4 py-3 font-mono text-xs">{ceg.adoszam}</td>
                    <td className="px-4 py-3">{ceg.kapcsolattarto}</td>
                    <td className="px-4 py-3">{ceg.berprogram}</td>
                    <td className="px-4 py-3 text-center">
                      {ceg.aktiv ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">Igen</span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-800">Nem</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-500 truncate max-w-[200px]" title={ceg.megjegyzes}>{ceg.megjegyzes}</td>
                  </tr>
                ))}
                {filteredCegek.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                      Nincs a szűrésnek megfelelő cég.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
