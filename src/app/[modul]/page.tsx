import NavBar from '../NavBar';
import { SLUG_TITLES } from '../menu';
import { notFound } from 'next/navigation';

export default async function ModulPage({ params }: { params: Promise<{ modul: string }> }) {
  const { modul } = await params;
  const title = SLUG_TITLES[modul];
  if (!title) notFound();
  return (
    <div className="min-h-screen bg-slate-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <NavBar title={title} />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
        <div className="mt-6 bg-white border border-slate-200 rounded-xl p-10 text-slate-500">Ez a modul fejlesztés alatt áll.</div>
      </main>
    </div>
  );
}
