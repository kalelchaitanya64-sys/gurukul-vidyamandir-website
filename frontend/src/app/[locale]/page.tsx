import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import ProgramsSection from '@/components/home/ProgramsSection'
import NoticesTicker from '@/components/home/NoticesTicker'
import ResultsHighlight from '@/components/home/ResultsHighLight'
import TestimonialsSection from '@/components/home/TestimonialsSection'

export default function HomePage() {
  return (
    <div>
      <NoticesTicker />
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <ResultsHighlight />
      <TestimonialsSection />
    </div>
  )
}