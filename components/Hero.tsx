'use client'

import { useState } from 'react'
import { beans, Bean } from '@/lib/beans'

export default function Hero() {
  const [active, setActive] = useState<Bean>(beans[0])

  return (
    
    <section className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] min-h-130 border-b border-border">

      
      <div className="flex flex-col justify-between p-4 sm:p-8">

       
        <div className="ml-0 sm:ml-10 mt-4 sm:mt-0">
          <p className="text-[10px] tracking-widest text-muted mb-4 sm:mb-6">
            VOL. 04 · JUNI 2026
          </p>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.2] mb-5">
            Kafa koja<br />pamti tlo.
          </h1>
        </div>

        <div className="mt-8 sm:mt-16">

          
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 border-t border-b border-border py-2.5 font-mono text-[11px] tracking-widest opacity-60">
            <span>3 aktivne kafe</span>
            <span className="hidden sm:inline">Etiopija · Kolumbija · Brazil</span>
            <span>Prženo ove sedmice</span>
          </div>

         
          <div className="flex flex-col md:flex-row">
            {beans.map((item, index) => {
              const isActive = active.id === item.id
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`
                    flex-1 p-5 text-left flex flex-col gap-1.5 cursor-pointer transition-colors border-none
                    /* Na mobilnom top border od druge karte, na desktopu lijevi border */
                    ${index !== 0 ? 'border-t md:border-t-0 md:border-l border-border' : ''}
                    ${isActive ? 'bg-dark text-bg' : 'bg-transparent text-text'}
                  `}
                >
                  <span className="text-[11px] opacity-50 font-mono">{item.number}</span>
                  <span className="text-[11px] opacity-60 font-mono">{item.country} · {item.region}</span>
                  <span className="font-playfair italic text-[24px] sm:text-[28px] font-normal my-1">{item.name}</span>

                  <div className="flex gap-1.5 flex-wrap mt-1">
                    {item.flavours?.map((flavor: string) => (
                      <span
                        key={flavor}
                        className={`
                          text-[10px] px-2 py-0.5 tracking-wide border
                          ${isActive ? 'border-bg' : 'border-border'}
                        `}
                      >
                        {flavor}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs opacity-70 mt-4 md:mt-auto pt-2 md:pt-4 font-mono">{item.price}</span>
                </button>
              )
            })}
          </div>

        </div>
      </div>

      
      <div className="bg-bg flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-border">
        {[
          { label: 'Nadmorska visina', value: active.altitude, sub: `${active.farm} · ${active.country}` },
          { label: 'Berba', value: active.harvest, sub: `${active.process} procesiranje` },
          { label: 'Barista preporuka', value: active.brewMethod, sub: `${active.temperature} · ${active.time}` },
        ].map((item, i) => (
          <div 
            key={i} 
            className={`px-6 py-6 sm:px-8 sm:py-8 ${i < 2 ? 'border-b border-border' : ''}`}
          >
            <p className="text-xs tracking-wider text-muted mb-1">{item.label}</p>
            
            <p className="font-playfair italic text-4xl sm:text-5xl text-text leading-none mb-1">{item.value}</p>
            <p className="text-xs text-text mt-3 sm:mt-4">{item.sub}</p>
          </div>
        ))}
      </div>

    </section>
  )
}