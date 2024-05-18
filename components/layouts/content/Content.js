import React from 'react'

const Content = ( {children} ) => {
  return (
    <section className="max-w-[800px] md:min-w-[640px] min-h-[100vh] mx-auto mt-20">
      {children}
    </section>
  )
}

export default Content
