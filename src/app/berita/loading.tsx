export default function LoadingBeritaPage() {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section Placeholder */}
        <div className="bg-gray-100 h-64 md:h-80 w-full flex items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="h-8 w-64 bg-gray-300 rounded mx-auto mb-4" />
            <div className="h-4 w-40 bg-gray-200 rounded mx-auto" />
          </div>
        </div>
  
        {/* Skeleton Cards */}
        <div className="py-12 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Memuat Berita...</h2>
            <p className="text-gray-600">Mohon tunggu sebentar</p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-100 rounded-xl h-[300px] w-full shadow-md"
              >
                <div className="h-48 bg-gray-300 rounded-t-xl" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  