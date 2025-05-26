import { Button } from '@/components/ui/button'

import React from 'react'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#ffda6e" bookmarked={false}          
        />
        <CompanionCard 
          id="456"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={30}
          color="#e5d0ff" bookmarked={false}        />
        <CompanionCard 
          id="789"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={30}
          color="#BDE7FF" bookmarked={false}        />
      </section>
      <section className="home-section">
        <CompanionsList
         title="Recently Completed sessions"
         companions={recentSessions}
         classNames="w-2/3 max-lg:w-full"
         
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page
