import React from 'react';

import CircularProgressBar from '@/components/CircularProgressBar';
import CountdownTimer from '@/components/CountdownTimer'
import { Button } from '@/components/ui/Button';
import DonationsCollection from '@/components/DonationsCollection';

const CampaignDetail = () => {
  return (
    <main className="space-y-9">
      <figure className="w-full h-[55vh] rounded-2xl overflow-hidden">
        <img 
          src="https://placehold.co/600x400/FFFFFF/000000.png"
          className="size-full object-cover"
        />
      </figure>

      <section className='space-y-6'>
        <header className="space-y-1.5">
          <div className="space-y-1.5">
            <h1 className="text-2xl flex-1 font-bold">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <p className='text-gray-300/90 text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam numquam commodi officia quia fuga est itaque perferendis accusamus autem! Dignissimos, at magnam officia cum alias nisi expedita possimus quis ipsa.
            Quas accusantium odit, cumque qui assumenda, facilis voluptatem ea at nulla est architecto perspiciatis ad voluptatum corrupti. Voluptas, quam perspiciatis odit facilis blanditiis, provident reiciendis ex minima architecto animi esse.
            Dolorum, sed consectetur autem voluptatibus, voluptates perferendis sapiente eos saepe dignissimos velit, eum repellat ab culpa molestias iure. Debitis rem aspernatur minus illo eligendi aliquam ex odit beatae suscipit facere?</p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <CountdownTimer className="text-base h-9 font-medium bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded-lg gap-x-1.5" />
              <Button className='text-base font-semibold px-8'>$ Donate</Button>
            </div>

            {/* Campaign Progress */}
            <CircularProgressBar 
              progress={80}
              size={100}
              trackWidth={7}
              indicatorWidth={13}
            />
          </div>
        </header>

        {/* Stats */}
        <div className="border-y border-gray-900/80 py-7 px-8 -mx-1.5 msm:-mx-3 md:-mx-4 lg:-mx-8 grid grid-cols-5 bg-black/30">
          <div className="text-center space-y-0.5">
            <span className="text-sm slg:text-base opacity-70">Raised</span>
            <h4 className="text-sm tracking-tight sm:text-base slg:text-xl lg:text-3xl font-extrabold">$5416</h4>
          </div>

          <div className="text-center space-y-0.5">
            <span className="text-sm slg:text-base opacity-70">Goal</span>
            <h4 className="text-sm tracking-tight sm:text-base slg:text-xl lg:text-3xl font-extrabold">$31,512</h4>
          </div>

          <div className="text-center space-y-0.5">
            <span className="text-sm slg:text-base opacity-70">Left</span>
            <h4 className="text-sm tracking-tight sm:text-base slg:text-xl lg:text-3xl font-extrabold">$29,000</h4>
          </div>

          <div className="text-center space-y-0.5">
            <span className="text-sm slg:text-base opacity-70">Donors</span>
            <h4 className="text-sm tracking-tight sm:text-base slg:text-xl lg:text-3xl font-extrabold">12</h4>
          </div>

          <div className="text-center space-y-0.5">
            <span className="text-sm slg:text-base opacity-70">Days Left</span>
            <h4 className="text-sm tracking-tight sm:text-base slg:text-xl lg:text-3xl font-extrabold">90 Days</h4>
          </div>
        </div>
      </section>

      {/* Donations */}
      <section className="space-y-4">
        <h1 className="text-2xl font-bold border-b-8 border-red-400 inline-block">Donations</h1>

        {/* Donations Collection */}
        <DonationsCollection />
      </section>
    </main>
  )
}

export default CampaignDetail