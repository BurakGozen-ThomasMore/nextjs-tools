import backgroundImage from "@public/background.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-screen grid-cols-2">
      <div className="relative w-full">
        <Image
          className="object-cover"
          src={backgroundImage}
          alt="Background image"
          priority
          fill
        />
      </div>

      <div className="relative flex h-full flex-col items-center justify-center">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          className="absolute right-10 top-10"
          priority
        />

        <div className="flex flex-col gap-5">
          <span className="font-sans">Dit is een tekst in Roboto.</span>
          <span className="font-mono">Dit is een tekst in Roboto Mono.</span>
          <span className="font-serif">Dit is een tekst in Roboto Serif.</span>
        </div>
      </div>
    </main>
  );
}
