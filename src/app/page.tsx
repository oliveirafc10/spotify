import { Inter } from 'next/font/google'
import { Home as HomeIcon, Search, Library as LibraryIcon} from 'lucide-react'

import Footer from './components/footer'
import Aside from './components/aside'
import Main from './components/main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className="w-72 bg-zinc-950 p-6">
          <Aside />
        </aside> 
        <main className='flex-1 p-4'>
          <Main />
        </main>
      </div>
      <footer>
          <Footer />
      </footer>
    </div>
  )
}
