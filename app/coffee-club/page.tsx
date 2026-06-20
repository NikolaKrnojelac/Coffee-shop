import Link from "next/link";

export default function CoffeeClubDetails() {
  return (
    <main>
      
      <div className="border-b-2 border-border px-6 sm:px-16 py-12 sm:py-20">
        <p className="text-[10px] text-muted mb-4 sm:mb-6 tracking-widest">COFFEE CLUB</p>
        <h1 className="font-playfair italic text-4xl sm:text-6xl lg:text-7xl max-w-3xl leading-[1.2]">
          Jednom mjesečno.
          <br />
          Uvijek iznenađenje.
        </h1>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
       
        <div className="px-6 sm:px-16 py-10 sm:py-14 border-b md:border-b-0 md:border-r border-border">
          <p className="text-sm text-muted leading-loose">
            Ne naručuješ kafu iz kataloga. Svaki mjesec naš barista Luka lično
            odabira jednu izuzetnu kafu s male plantaže i šalje ti je na kućnu
            adresu — sveže prženu, s karticom o porijeklu i preporukom za
            pripremu.
          </p>
        </div>

       
        <div className="px-6 sm:px-16 py-10 sm:py-14">
          <p className="text-sm text-muted leading-loose">
            Svaka selekcija je ograničena. Biram kafe koje su dostupne u malim
            količinama — kad nestane, nestane. Nije ovo pretplata na
            komercijalnu kafu. Ovo je pretplata na priču.
          </p>
        </div>
      </div>

      
      <div className="bg-dark border-b-2 border-border min-h-64 sm:min-h-100 flex items-center justify-center">
        <p className="text-[10px] tracking-[0.2em] text-white/20">
          [ foto — barista pri radu ]
        </p>
      </div>

      
      <div className="px-6 sm:px-16 py-10 sm:py-14 border-b border-border">
        <p className="tracking-wide mb-8 sm:mb-12 text-xs">KAKO FUNKCIONIŠE</p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {[
            {
              n: "01",
              title: "Barista bira",
              desc: "Luka posjećuje sajmove i direktno kontaktira farmere. Bira kafu koja ima priču.",
            },
            {
              n: "02",
              title: "Pržimo za tebe",
              desc: "Kafa se prži isti tjedan kad šaljemo. Nikad zrno starije od 7 dana.",
            },
            {
              n: "03",
              title: "Pakujemo s pažnjom",
              desc: "Uz kafu ide kartica s pričom o plantaži, profilu okusa i receptom za pripremu.",
            },
            {
              n: "04",
              title: "Stiže na vrata",
              desc: "Svaki mjesec nova kafa. Svaki put drugačija zemlja, drugačija priča.",
            },
          ].map((item, i) => (
            <div
              key={i}
              
              className={`py-6 pr-0 lg:pr-10 border-b sm:border-b-0 lg:border-r border-border last:border-0 lg:mr-10 lg:last:mr-0`}
            >
              <p className="text-xs font-mono text-muted mb-3 sm:mb-4">{item.n}</p>
              <p className="font-playfair italic mb-3 sm:mb-4 text-xl font-bold">
                {item.title}
              </p>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] border-b border-border">
        <div className="bg-dark min-h-64 sm:min-h-80 border-b-2 md:border-b-0 md:border-r-2 border-border flex items-center justify-center">
          <p className="text-[10px] tracking-[0.2em] text-white/20">
            [ foto — pakovanje kafe ]
          </p>
        </div>
        <div className="px-6 sm:px-16 py-10 sm:py-14 flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.2em] text-muted mb-4 sm:mb-6">
            ZAŠTO CLUB
          </p>
          <h2 className="font-playfair italic text-2xl sm:text-[36px] font-bold leading-[1.2] mb-4 sm:mb-6">
            Nije ovo samo kafa.
            <br />
            Ovo je edukacija.
          </h2>
          <p className="text-sm leading-loose text-muted">
            Svaka kartica koja dođe uz kafu govori ti gdje je plantaža, na kojoj
            visini raste, koji je proces prerade i kako to utiče na okus u
            šoljici. Nakon godinu dana Club pretplate, znat ćeš više o kafi nego
            90% barista.
          </p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-border">
        
        <div className="px-6 sm:px-16 py-10 sm:py-14 border-b md:border-b-0 md:border-r border-border flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-muted mb-3">
              MJESEČNA PRETPLATA
            </p>
            <p className="font-playfair italic text-4xl sm:text-5xl font-bold leading-none mb-4">
              18€
            </p>
            <p className="text-sm text-muted">
              Po isporuci. Otkazivanje u bilo kom trenutku.
            </p>
          </div>
        </div>
        
        <div className="px-6 sm:px-16 py-10 sm:py-14 flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] text-muted mb-3">
              GODIŠNJA PRETPLATA
            </p>
            <p className="font-playfair italic text-4xl sm:text-5xl font-bold leading-none mb-4">
              180€
            </p>
            <p className="text-sm text-muted">
              12 isporuka. Dvije gratis. Uštedite 36€.
            </p>
          </div>
        </div>
      </div>

      
      <div className="px-6 sm:px-16 py-10 sm:py-14 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center">
        <h2 className="font-playfair italic text-3xl sm:text-4xl font-bold text-center sm:text-left">Spreman si?</h2>
        <Link
          href="/coffee-club/join"
          className="w-full sm:w-auto text-center bg-text text-bg font-mono text-xs tracking-[0.15em] px-10 py-4 hover:opacity-80 transition-opacity"
        >
          PRETPLATI SE
        </Link>
      </div>
    </main>
  );
}