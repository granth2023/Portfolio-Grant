import Image from 'next/image';
import Grant from "@/public/Grant-07.jpg";

export default function Home() { 
  return ( 
    <div className="divide-y divide-gray-199 dark:divide-gray-700"> 
    <div className="space-y-2 pt-5 pb-8 md:space-x-5">
      <h1 className="text-3xl front-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13"> 
      Home
      </h1>
  </div>
    <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y--0">
      <div className="flex flex-col items -center pt-8">
        <Image 
          alt="Picture of Grant"
          src={Grant}
          className="h-48 w-48 rounded-full boject-cover object-top"
          /> 
          <h3 className="pt-4 pb-2 text-2xl front-bold leading-8 tracking-tight"> 
            Grant Harris
          </h3>
      <p className ="text-gray-500 dark:text-gray-300 text-center"> 
        Click
        <a 
          href="https://docs.google.com/document/d/1ukaBYnbsMWb6IH_FeVD0kqJ_RA7JsY0JncO1RBg18I4/edit?usp=sharing "
          target ="_blank"
          > 
            {""}  
            <b>here</b>
            </a>{""}
            to view my resume
      </p>

      

      </div>
    </div>



  )


}