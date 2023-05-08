import { Home as HomeIcon, Search, Library as LibraryIcon } from 'lucide-react'
import List from './list' 

export default function Aside() {
    return ( 
        <aside>
          <div className='flex itens-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Inicio
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Localizar
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <LibraryIcon />
              Sua Biblioteca
            </a>
          </nav>
          <nav>
            <List />
          </nav>
        </aside>
    )
}