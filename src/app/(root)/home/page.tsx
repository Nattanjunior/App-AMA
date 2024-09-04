'use client'
import img from "../../../assets/logo.svg"

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen bg-black">
        <div>
          <Image
            src={img}
            alt="image-logo"
            width={100}
            height={100}
          />
        </div>
      </main>
    </>
  );
}
