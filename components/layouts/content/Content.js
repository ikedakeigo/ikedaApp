import React from 'react'

const Content = ( {children} ) => {
  return (
    <section className="xl:w-[1280px] md:min-w-[640px] min-h-[100vh] mx-auto">
      {children}
    </section>
  )
}

export default Content
