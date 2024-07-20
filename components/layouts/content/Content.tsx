import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Content = ({ children }: Props) => {
  return (
    <section className="max-w-[800px] md:min-w-[640px] min-h-[100vh] mx-auto mt-20">
      {children}
    </section>
  )
}

export default Content
