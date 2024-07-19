import React from 'react'
import Link from 'next/link'

const TopMv = () => {
  return (
    <section>
      <div className="p-4 mb-16 bg-white box-sha shadow-lg  ">
        <Link href="#"  className='flex justify-center'>
          <img className='rounded-2xl' src="/image/bnr_aircon.webp" alt="" />
        </Link>
      </div>
    </section>
  )
}

export default TopMv
