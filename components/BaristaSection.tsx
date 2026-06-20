import Image from "next/image";

export default function BaristaSection() {
  return (
    <section id="barista" className="grid border-b border-border grid-cols-[1fr_1fr]">
     <div className="bg-dark border-b lg:border-b-0 lg:border-r border-border min-h-100 sm:min-h-125 lg:min-h-175 flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/barista.jpg"
          alt="Barista pri radu s kafom"
          fill
          sizes="(max-w-1024px) 100vw, 50vw"
          className="object-cover opacity-90 transition-transform duration-500 hover:scale-102"
          priority
        />
      </div>

      <div className="flex flex-col justify-between px-16 py-14">
        <div>
          <p className="text-xs text-muted tracking-widest mb-8">BARISTA</p>

          <h2 className="font-playfair italic text-5xl leading-1.1 font-bold mb-8">
            Ja biram.
            <br />
            Ti uživaš.
          </h2>

          <p className="text-sm border-l  pl-4 mb-6 border-border leading-[1.9]">
            Zovem se Luka. Već šest godina putujem na kafe sajmove, posjećujem
            plantaže i razgovaram s farmerima. Svaka kafa koju vidite u Origineu
            prošla je kroz moje ruke — od uzorka do šoljice.
          </p>

          <p className="text-sm leading-[1.9] pl-4">
            Ne biram kafe koje su popularne. Biram kafe koje imaju priču
            vrijednu ispričati.
          </p>
        </div>

        <div className="flex flex-row justify-between border-t border-border pt-8 items-center">
          <div className="">
            <p className="font-playfair italic text-2xl mb-1">Luka Jović</p>
            <p className="text-xs tracking-wider text-muted">
              HEAD BARISTA · ORIGINE
            </p>
          </div>
          <button className="font-mono font-bold text-xs tracking-widest px-6 py-2.5 cursor-pointer border border-border">
            KONTAKT
          </button>
        </div>
      </div>
    </section>
  );
}
