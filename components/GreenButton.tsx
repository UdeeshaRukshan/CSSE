import React from 'react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const GreenButton = React.forwardRef<HTMLButtonElement, GreenButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "bg-green-500 hover:bg-green-600 text-white font-bold",
          "shadow-lg hover:shadow-xl transition-all duration-200",
          "border-b-4 border-green-700 hover:border-green-800",
          "active:border-b-0 active:mt-1 active:mb-[-1px]",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

GreenButton.displayName = 'GreenButton'