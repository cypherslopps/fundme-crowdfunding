"use client";

import React, { useCallback, useState } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const SearchBox = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-1/2 h-11 hidden mlg:flex">
      <input 
        type="search"
        placeholder="Search Campaigns"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
        className="w-full h-full rounded-md bg-gray-800/50 px-3.5 outline-none border-none placeholder:text-sm placeholder:text-gray-300 text-sm sm:text-base tracking-wide"
      />
    </div>
  )
}

export default SearchBox