import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { AboutMachines } from '@/components/about-machines'
import { ProductGrid } from '@/components/product-grid'
import { BusinessOpportunity } from '@/components/business-opportunity'
import { WhyUs } from '@/components/why-us'
import { ContactSection } from '@/components/contact-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutMachines />
        <ProductGrid />
        <BusinessOpportunity />
        <WhyUs />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
