import React from 'react'
import SideBar from './SideBar'
import { ScrollArea } from './ui/scroll-area'

interface PageContainerProps {
  children: React.ReactNode
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="flex flex-1 overflow-x-auto">
        <SideBar className="flex-none" />
        <ScrollArea className="flex-1 h-screen">
          {children}
        </ScrollArea>
      </div>
    </div>
  )
}
