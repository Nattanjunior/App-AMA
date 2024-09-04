'use client'
import img from "../../../assets/logo.svg"
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-zinc-950 flex justify-center items-center">
        <div className="w-full flex flex-col items-center">
          <Image
            src={img}
            alt="image-logo"
            width={100}
            height={100}
          />

          <p className="text-zinc-300 max-md:text-[1.6rem] text-center p-[2.4rem]">Crie uma sala pública de AMA (Ask me anything) e priorize as perguntas mais importantes para a comunidade.</p>

          <div className="flex justify-between max-md:w-[95%] p-[1.4rem] bg-zinc-900 rounded-[1.2rem]">
            <input type="text" className="bg-zinc-900 max-sm:w-[13.5rem] text-zinc-300 border-none outline-none" placeholder="Nome da sala"/>
            <button type="submit" className="flex items-center bg-orange-400 px-[1.2rem] py-[.6rem] rounded-[.8rem] max-sm:px-[.6rem]">Criar sala  <ArrowRight className="ml-[.6rem]" /></button>
          </div>
        </div>
      </main>
    </>
  );
}
