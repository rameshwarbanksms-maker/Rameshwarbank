import HeroSection from '@/components/HeroSection';
import AwardsSection from '@/components/AwardsSection';
import NewAgeBanking from '@/components/NewAgeBanking';

import ProductsSection from '@/components/ProductsSection';
import ServicesGrid from '@/components/ServicesGrid';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AwardsSection />
      <NewAgeBanking />
     
      <ProductsSection />
      <ServicesGrid />
    </>
  );
}