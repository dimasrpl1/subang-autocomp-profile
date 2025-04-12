import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import BeritaHero from '@/components/berita/BeritaHero';
import ClientBeritaList from '@/components/berita/ClientBeritaList';

const BeritaPage = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data: berita, error } = await supabase
    .from('berita')
    .select('id, judul, gambar, created_at')
    .order('created_at', { ascending: false })
    .limit(6); // Batasi hanya 6 berita pertama

  if (error) {
    console.error('Supabase Error:', error);
    return <div className="text-red-500 text-center py-12">Gagal memuat berita.</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <BeritaHero />
      <ClientBeritaList berita={berita} />
    </div>
  );
};

export default BeritaPage;