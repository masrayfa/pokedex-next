import React, { ReactNode } from 'react'

type HeaderBlurProps = {
  children: ReactNode
}

const HeaderBlur = (props: HeaderBlurProps) => {
  return (
    <div className="sticky mx-auto top-6 z-50 backdrop-blur-xl bg-opacity-10 bg-clip-padding bg-gray-400 w-[70vw] sm:w-[50vw] rounded-xl">
      {props.children}
    </div>
  )
}

export default HeaderBlur
