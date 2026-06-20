"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function JoinClub() {
  const [activeTab, setActiveTab] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [grind, setGrind] = useState("Cijelo zrno");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !address) return;

    setLoading(true);

    const response = await fetch('/api/subscribe', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        address,
        grind,
        plan: activeTab === 0 ? 'Mjesečno — 18€' : 'Godišnje — 180€'
      })
    });

    setLoading(false);

    if (response.ok) setSuccess(true);
  };

  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-[10px] tracking-[0.2em] text-muted mb-6">COFFEE CLUB</p>
          <h1 className="font-playfair italic text-4xl sm:text-[48px] font-bold leading-[1.05] mb-6">
            Dobrodošao<br />u Club.
          </h1>
          <p className="text-sm text-muted">Potvrda stiže na tvoj email.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      
      <div className="grid border-b border-border grid-cols-1 lg:grid-cols-2">
        
      
        <div className="px-6 sm:px-16 py-12 sm:py-20 border-b lg:border-b-0 lg:border-r border-border">
          <p className="text-muted text-[10px] tracking-[0.2em] mb-6 sm:mb-8">
            COFFEE CLUB · PRETPLATA
          </p>
          <h2 className="font-playfair text-3xl sm:text-5xl italic font-bold mb-6 sm:mb-8 leading-[1.2]">
            Jedna kafa.
            <br />
            Svaki mjesec.
          </h2>

          <p className="text-sm text-muted border-l border-border pl-4">
            Započni svoje putovanje kroz ukuse. Naš barista bira i šalje svježe
            prženu kafu direktno na tvoj prag – sa kompletnom pričom o njenom
            porijeklu.
          </p>

          <div className="pt-8">
            <p className="font-bold text-xs sm:text-sm text-muted mb-6">ŠTA DOBIJAŠ?</p>
            <div className="flex flex-col gap-4">
              {[
                "250g sveže pržene kafe, pržene iste sedmice",
                "Kartica s pričom o plantaži i profilu okusa",
                "Prijedlog recepta: filter, espresso ili french press",
                "Otkazivanje u bilo kom trenutku",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-muted mt-0.5">—</span>
                  <span className="text-sm text-muted leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="px-6 sm:px-16 py-12 sm:py-20 bg-bg/50">
          
          
          <div className="flex gap-4 mb-8">
            {[
              { price: "18€", desc: "/ mjesečno" },
              { price: "180€", desc: "/ godišnje · 2 gratis" },
            ].map((plan, i) => (
              <div
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-1 p-3 sm:p-4 border cursor-pointer transition-colors text-center ${
                  activeTab === i
                    ? "border-border bg-text text-bg"
                    : "border-border/40 hover:border-border/80"
                }`}
              >
                <p className="font-playfair italic text-xl sm:text-2xl font-bold mb-0.5">
                  {plan.price}
                </p>
                <p
                  className={`text-xs sm:text-sm ${activeTab === i ? "opacity-80" : "text-muted"}`}
                >
                  {plan.desc}
                </p>
              </div>
            ))}
          </div>

          
          <div className="flex flex-col gap-5">
            <div>
              <label className="text-[10px] tracking-[0.12em] block mb-2 font-mono text-muted">
                IME I PREZIME
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Marko Marković"
                className="w-full border border-border bg-transparent px-3 py-2.5 text-sm font-mono outline-none focus:border-text transition-colors"
              />
            </div>
            
            <div>
              <label className="text-[10px] tracking-[0.12em] block mb-2 font-mono text-muted">
                EMAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="marko@email.com"
                className="w-full border border-border bg-transparent px-3 py-2.5 text-sm font-mono outline-none focus:border-text transition-colors"
              />
            </div>
            
            <div>
              <label className="text-[10px] tracking-[0.12em] block mb-2 font-mono text-muted">
                ADRESA
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ulica i broj, Grad"
                className="w-full border border-border bg-transparent px-3 py-2.5 text-sm font-mono outline-none focus:border-text transition-colors"
              />
            </div>
            
            <div>
              <label className="text-[10px] tracking-[0.12em] block mb-2 font-mono text-muted">
                MLJETI ILI CIJELO ZRNO
              </label>
              <div className="relative">
                <select 
                  value={grind} 
                  onChange={(e) => setGrind(e.target.value)} 
                  className="w-full border border-border bg-bg px-3 pr-8 py-2.5 text-sm font-mono outline-none cursor-pointer appearance-none focus:border-text transition-colors"
                >
                  <option>Cijelo zrno</option>
                  <option>Mljeveno — filter</option>
                  <option>Mljeveno — espresso</option>
                  <option>Mljeveno — french press</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none">
                  <ChevronDown size={14} />
                </span>
              </div>
            </div>

            <button 
              onClick={handleSubmit} 
              disabled={loading}  
              className="w-full bg-text text-bg font-mono font-bold text-xs tracking-[0.15em] py-3.5 mt-2 cursor-pointer hover:opacity-90 active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Šaljem...' : 'Postani član'}
            </button>
          </div>
          
        </div>
      </div>
    </main>
  );
}