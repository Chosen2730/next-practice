import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const New = ({ data }) => {
  const {
    query: { id },
  } = useRouter();
  return (
    <div>
      <div className='grid sm:grid-cols-2 p-8'>
        <div className=''>
          <h4 className='text-center font-bold text-2xl mb-5 uppercase text-red-600'>
            {data.name}
          </h4>
          <img
            className='w-full h-52 object-contain'
            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${data.image}`}
            alt=''
          />
        </div>
        <div>
          <h4>Type: {data.type}</h4>

          {data.stats.map(({ name, value }) => {
            return (
              <h4 className='font-bold'>
                {name}: {value}
              </h4>
            );
          })}
          <Link href='/'>
            <h4 className='bg-red-600 w-fit p-2 text-white rounded-lg my-4 cursor-pointer'>
              Back Home
            </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default New;

export const getServerSideProps = async ({ params }) => {
  console.log(params);
  const res = await fetch(
    `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
