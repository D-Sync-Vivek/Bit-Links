import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-2 justify-center">
          <p className="text-2xl font-bold text-center ">The best URL Shortener in the Market</p>
          <p className="text-lg font-bold text-center px-10 pb-3">We are the most straight forward shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL Shortener</p>
          <div className='flex gap-3 items-center justify-center'>
            <Link href="/shorten"><button className='bg-sky-300 cursor-pointer hover:underline p-1 font-bold text-sm rounded-lg shadow-lg px-2 border-1 border-sky-800'>Try Now</button></Link>
            <Link href="/github"><button className='bg-sky-300 cursor-pointer hover:underline p-1 font-bold text-sm rounded-lg shadow-lg px-2 border-1 border-sky-800'>GitHub</button></Link>
           </div>
        </div>
         
        <div className="  flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} alt={"Vector Image"} fill={"full"} />
        </div>
      </section>
    </main>
  );
}