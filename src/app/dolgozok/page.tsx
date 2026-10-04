'use client';

import { useState } from 'react';
import NavBar from '../NavBar';

// Mock adat a bemutatóhoz
const mockData = [
  { id: 1, cegkod: 'MINTA01', nev: 'Kovács János', adoazonosito: '8456789123', taj: '123-456-789', szakkepzettseg: 'Nem', navEfoNapok: 45, navDatum: '2026-10-01', forras: 'ONYA', statusz: 'OK', mezo90: 'Nem', megjegyzes: 'Szezonális munka' },
  { id: 2, cegkod: 'MINTA01', nev: 'Nagy Éva', adoazonosito: '8123456789', taj: '987-654-321', szakkepzettseg: 'Igen', navEfoNapok: 115, navDatum: '2026-10-02', forras: 'Mobil', statusz: 'ELLENŐRIZENDŐ', mezo90: 'Igen', megjegyzes: 'Közel a keret végéhez!' },
  { id: 3, cegkod: 'TEST02', nev: 'Szabó Péter', adoazonosito: '8765432109', taj: '111-222-333', szakkepzettseg: 'Nem', navEfoNapok: 10, navDatum: '2026-09-28', forras: 'CSV', statusz: 'OK', mezo90: 'Nem', megjegyzes: '' },
  { id: 4, cegkod: 'MINTA01', nev: 'Kiss Mária', adoazonosito: '8234567890', taj: '444-555-666', szakkepzettseg: 'Igen', navEfoNapok: 0, navDatum: '2026-10-03', forras: 'ONYA', statusz: 'HIBA', mezo90: 'Nem', megjegyzes: 'Rossz TAJ szám a NAV-nál' },
];

export default function DolgozokPage() {
  const [filterCegkod, setFilterCegkod] = useState('');
  const [filterNev, setFilterNev] = useState('');
  const [filterAdoazonosito, setFilterAdoazonosito] = useState('');
  const [filterTaj, setFilterTaj] = useState('');

  // Szűrési logika
  const filteredData = mockData.filter((row) => {
    return (
      row.cegkod.toLowerCase().includes(filterCegkod.toLowerCase()) &&
      row.nev.toLowerCase().includes(filterNev.toLowerCase()) &&
      row.adoazonosito.includes(filterAdoazonosito) &&
      row.taj.includes(filterTaj)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <NavBar title="Dolgozók és Törzsadatok" />

      {/* Main Content */}
      <main className="flex-1 w-full px-6 py-6 flex flex-col gap-4 overflow-x-hidden">
        
        {/* Szűrők sávja */}
        <div className="bg-white p-4 shadow-sm border border-gray-200 flex flex-wrap gap-4 items-end">
            <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Cégkód</label>
                <input 
                    type="text" 
                    value={filterCegkod}
                    onChange={(e) => setFilterCegkod(e.target.value)}
                    className="border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:border-[#184a75] focus:ring-1 focus:ring-[#184a75] text-black"
                    placeholder="Keresés..."
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Név</label>
                <input 
                    type="text" 
                    value={filterNev}
                    onChange={(e) => setFilterNev(e.target.value)}
                    className="border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:border-[#184a75] focus:ring-1 focus:ring-[#184a75] text-black"
                    placeholder="Keresés..."
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Adóazonosító jel</label>
                <input 
                    type="text" 
                    value={filterAdoazonosito}
                    onChange={(e) => setFilterAdoazonosito(e.target.value)}
                    className="border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:border-[#184a75] focus:ring-1 focus:ring-[#184a75] text-black"
                    placeholder="Keresés..."
                />
            </div>
            <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">TAJ</label>
                <input 
                    type="text" 
                    value={filterTaj}
                    onChange={(e) => setFilterTaj(e.target.value)}
                    className="border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:border-[#184a75] focus:ring-1 focus:ring-[#184a75] text-black"
                    placeholder="Keresés..."
                />
            </div>
            <div className="ml-auto flex items-center">
                <button 
                  onClick={() => { setFilterCegkod(''); setFilterNev(''); setFilterAdoazonosito(''); setFilterTaj(''); }}
                  className="text-sm font-semibold text-[#184a75] hover:underline flex items-center gap-1"
                >
                    <span className="material-symbols-outlined text-[18px]">clear_all</span>
                    Szűrők törlése
                </button>
            </div>
        </div>

        {/* Adattábla */}
        <div className="bg-white shadow-sm border border-gray-200 overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap text-sm text-black">
                <thead>
                    <tr className="bg-[#e4eedb] text-[#23633b] text-[11px] uppercase tracking-wide border-b-2 border-[#cde0c2]">
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold">Cégkód</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold">Név</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold">Adóazonosító jel</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold">TAJ</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold text-center">Szakképzettséget<br/>igényel?</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold text-center">NAV felhasznált<br/>EFO-napok</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold">NAV-ellenőrzés<br/>dátuma</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold">Ellenőrzés<br/>forrása</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold text-center">NAV-kontroll<br/>státusz</th>
                        <th className="px-3 py-3 border-r border-[#cde0c2] font-bold text-center">NAV Mg.<br/>+90 nap?</th>
                        <th className="px-3 py-3 font-bold">Megjegyzés</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((row, index) => (
                            <tr key={row.id} className={`border-b border-gray-100 hover:bg-green-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                <td className="px-3 py-2.5 border-r border-gray-200 font-medium text-gray-700">{row.cegkod}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200 font-bold">{row.nev}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200 font-mono text-gray-600">{row.adoazonosito}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200 font-mono text-gray-600">{row.taj}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200 text-center font-medium">{row.szakkepzettseg}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200 text-center font-bold">
                                    <span className={row.navEfoNapok > 110 ? 'text-red-600' : 'text-[#184a75]'}>{row.navEfoNapok}</span>
                                </td>
                                <td className="px-3 py-2.5 border-r border-gray-200">{row.navDatum}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200">{row.forras}</td>
                                <td className="px-3 py-2.5 border-r border-gray-200 text-center">
                                    {row.statusz === 'OK' && <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs font-bold border border-green-200">OK</span>}
                                    {row.statusz === 'ELLENŐRIZENDŐ' && <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-bold border border-yellow-200">ELLENŐRIZENDŐ</span>}
                                    {row.statusz === 'HIBA' && <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-bold border border-red-200">HIBA</span>}
                                </td>
                                <td className="px-3 py-2.5 border-r border-gray-200 text-center">{row.mezo90}</td>
                                <td className="px-3 py-2.5 text-gray-500 text-xs truncate max-w-[200px]" title={row.megjegyzes}>{row.megjegyzes}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={11} className="px-4 py-8 text-center text-gray-500 font-medium">
                                Nincs a szűrésnek megfelelő találat.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </main>
    </div>
  );
}
