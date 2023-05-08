import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Album from './album'
import AlbumTwo from './albumTwo'


export default function Main() {
    return (
        <main className="flex-1 p-1">
            <div className="flex items-center gap-2">
                <button className='rounded-full bg-black/40 p-1'>
                        <ChevronLeft />
                </button>
                <button className='rounded-full bg-black/40 p-1'>
                        <ChevronRight />
                </button>
            </div>
            <h1 className='font-semibold text-2xl mt-1'>Tocados recentemente</h1>

            <div className='grid grid-cols-4 gap-4 mt-1'>
                <strong>
                    <Album />
                </strong>
                <strong>
                    <Album />
                </strong>
                <strong>
                    <Album />
                </strong>

            </div>
            <h2 className='font-semibold text-1xl mt-10'>Playlist de Fabiano</h2>
            <div className='grid grid-cols-8 gap-4 mt-2'>
                <strong>
                    <AlbumTwo />
                </strong>
                <strong>
                    <AlbumTwo />
                </strong>
                <strong>
                    <AlbumTwo />
                </strong>
                <strong>
                    <AlbumTwo />
                </strong>
                <strong>
                    <AlbumTwo />
                </strong>
            </div>
        </main>      
        
    )
}