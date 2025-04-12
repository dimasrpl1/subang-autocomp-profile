// src/app/berita/[id]/page.tsx

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import BeritaHero from '@/components/berita/BeritaHero';
import Link from 'next/link';
import { CalendarIcon, ArrowLeftIcon } from 'lucide-react';

type Berita = {
  id: string;
  judul: string;
  gambar: string;
  isi: string;
  created_at: string;
};

interface PageProps {
  params: {
    id: string;
  };
}

export default async function BeritaDetailPage({ params }: PageProps) {
  const { id } = params;

  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase
    .from('berita')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !data) {
    notFound();
  }

  const berita: Berita = data;

  const { data: beritaTerbaru } = await supabase
    .from('berita')
    .select('*')
    .neq('id', id)
    .order('created_at', { ascending: false })
    .limit(3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <BeritaHero />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/berita" className="hover:text-blue-700 transition">Berita</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500 truncate max-w-xs">{berita.judul}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="relative">
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/berita-images/${berita.gambar}`}
                alt={berita.judul}
                width={800}
                height={450}
                className="w-full h-auto object-cover max-h-96"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
            </div>

            <div className="p-4 md:p-8">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <CalendarIcon size={16} className="mr-2" />
                <time dateTime={berita.created_at}>{formatDate(berita.created_at)}</time>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {berita.judul}
              </h1>

              <div className="flex items-center mb-8">
                <div className="h-1 w-16 bg-blue-600 rounded"></div>
                <div className="h-px flex-grow ml-2 bg-gray-200"></div>
              </div>

              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {berita.isi.split('\n\n').map((paragraf, index) => (
                  <p key={index} className="mb-4">{paragraf}</p>
                ))}
              </article>

              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link
                  href="/berita"
                  className="inline-flex items-center px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition duration-200"
                >
                  <ArrowLeftIcon size={16} className="mr-2" />
                  <span>Kembali ke Daftar Berita</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <div className="lg:sticky lg:top-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-1 h-6 bg-blue-600 rounded-full block mr-3"></span>
                Berita Terbaru
              </h2>

              <div className="space-y-6">
                {beritaTerbaru?.map((b) => (
                  <div key={b.id} className="group">
                    <Link href={`/berita/${b.id}`} className="block">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/berita-images/${b.gambar}`}
                            alt={b.judul}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-lg object-cover transition duration-300 group-hover:shadow-md"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition line-clamp-2">
                            {b.judul}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1 flex items-center">
                            <CalendarIcon size={12} className="mr-1" />
                            {formatDate(b.created_at)}
                          </p>
                        </div>
                      </div>
                    </Link>
                    <div className="mt-4 border-b border-gray-100"></div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/berita"
                  className="inline-block w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition text-sm font-medium"
                >
                  Lihat Semua Berita
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
