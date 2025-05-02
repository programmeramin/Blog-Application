import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({children, className, elem = "div", ...props}) => {
    const Elem = elem || "div"
  return (
    <Elem className={cn('max-w-[1280px] w-full mx-auto px-3 sm:px-5 lg:px-6', className)} {...props}>
      {children}
    </Elem>
  )
}

export default Container
