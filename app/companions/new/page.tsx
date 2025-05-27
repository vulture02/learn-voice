import CompanionForm from '@/components/CompanionForm'
import { newCompanionPermissions } from '@/lib/actions/companion.action';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';


import React from 'react'

const NewCompanion =async() => {
  const {userId}=await auth();
  if(!userId) redirect('/sign-in');
  const canCreateCompanion=await newCompanionPermissions();
  return (
    <main className='min-lg:w-1/3 min-mid:w-2/3 items-center justify-center pt-27'>
     { canCreateCompanion ?(<article className='w-full gap-4 flex flex-col '>
        <h1>Companion Builder</h1>
          <CompanionForm/>
      </article>) :(
        <article className='companion-limt'>
          <Image src="/images/limit.svg" alt='Companion Limit reached ' width={360} height={230}/>
          <div className='cta-badge'>
            Upgrade your plane

          </div>
          <div>
           <h1> You Reached Your Companion Limit</h1>
            <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
            <Link href="/subscription" className="btn-primary w-full justify-center"> Upgrade My Plan</Link>
          </div>
        </article>
      )
}
    </main>
  )
}

export default NewCompanion