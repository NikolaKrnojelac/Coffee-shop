export default function BaristaSection() {
  return (
    <section id="barista" className="grid border-b-2 border-border grid-cols-[1fr_1fr]">
      <div className="bg-dark border-r-2 border-border min-h-175 flex items-center justify-center">
        <p className="text-[10px] text-muted">[Slika bariste]</p>
      </div>

      <div className="flex flex-col justify-between px-16 py-14">
        <div>
          <p className="text-xs text-muted tracking-widest mb-8">BARISTA</p>

          <h2 className="font-playfair italic text-5xl leading-1.1 font-bold mb-8">
            Ja biram.
            <br />
            Ti uživaš.
          </h2>

          <p className="text-sm border-l-2  pl-4 mb-6 border-border leading-[1.9]">
            Zovem se Luka. Već šest godina putujem na kafe sajmove, posjećujem
            plantaže i razgovaram s farmerima. Svaka kafa koju vidite u Origineu
            prošla je kroz moje ruke — od uzorka do šoljice.
          </p>

          <p className="text-sm leading-[1.9] pl-4">
            Ne biram kafe koje su popularne. Biram kafe koje imaju priču
            vrijednu ispričati.
          </p>
        </div>

        <div className="flex flex-row justify-between border-t-2 border-border pt-8 items-center">
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
