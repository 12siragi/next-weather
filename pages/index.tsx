import SearchBox from '@/components/SearchBox';
import Head from 'next/head';

export default function Search() {
  return (
    <>
      <Head>
        <title>WeatherWise</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">WeatherWise</h1>
        <form className="w-full max-w-md bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Search for Local Weather</h2>
          <SearchBox />
        </form>
      </main>
    </>
  );
}

