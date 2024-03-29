import { SidebarDesktop } from '@/components/sidebar-desktop'
import { Header } from '@/components/header'

interface ChatLayoutProps {
  children: React.ReactNode
}

export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    // h-[calc(100vh_-_theme(spacing.16))]
    <div className="relative flex h-screen overflow-hidden">
      <SidebarDesktop />
      {children}
    </div>
    // <div className="relative flex h-[calc(100vh_-_theme(spacing.0))] overflow-hidden">
    //   <SidebarDesktop />
    //   <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
    //     <Header />
    //     <div className="overflow-y-scroll">{children}</div>
    //   </div>
    // </div>
  )
}
