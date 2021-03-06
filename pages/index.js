import Head from "next/head";
import Link from "next/link";

export default function Home({ obj }) {
  return (
    <div className='bg-gray-900'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid sm:grid-cols-3 gap-4 w-4/6 mx-auto py-10'>
        {obj?.map((pokenman) => {
          return (
            <Link key={pokenman.id} href={`/pokenman/${pokenman.id}`}>
              <div className='p-8 pb-12 bg-white text-center'>
                <img
                  className='object-contain h-full w-full'
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokenman.image}`}
                  alt=''
                />
                <h2 className='font-bold text-2xl'>{pokenman.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );
  const data = await res.json();

  return {
    props: { obj: data },
  };
};
