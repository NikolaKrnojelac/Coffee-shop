import Hero from '@/components/Hero'
import BeanDetail from '@/components/BeanDetail'
import { beans } from '@/lib/beans'
import BaristaSection from '@/components/BaristaSection'

export default function Home() {
  return (
    <main>
      <Hero />
      {beans.map((bean) => (
        <BeanDetail key={bean.id} bean={bean} />
      
      ))}

      <BaristaSection />
    </main>
  )
}