import Banner from "@/components/Banner";
import CategorySection from "@/components/CategorySection";
import DealsSection from "@/components/DealsSection";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-30">
      <Banner></Banner>
      <CategorySection></CategorySection>
      <DealsSection></DealsSection>
      <Testimonials></Testimonials>
    </div>
  );
}
