import React from 'react'

const CampaignCollection = () => {
  return (
    <section className="grid gap-y-3">
      <header className="flex items-center justify-between">
        <div>Content 1</div>
        <div>Content 2</div>
      </header>

      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 15 }).map((_, idx) => (
          <blockquote 
            key={idx}
            className="rounded-lg bg-gray-900/50 border border-gray-500/20 h-80 grid grid-rows-[40%_1fr] p-3 gap-y-2.5"
          >
            <figure>
              <img 
                src="https://placehold.co/600x400/FFFFFF/000000.png"
                className="size-full object-cover rounded-lg"
              />
            </figure>

            {/* Content */}
            <div>Content</div>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default CampaignCollection