import { Play } from 'lucide-react'

export default function AlbumTwo() {
    return (
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'> 
            <img src="/mtemt.jpeg" className='w-full' width={60} height={60} alt="Capa Matogrosso e Mathias" />
            <strong className='font-semibold '>Ao Vivo </strong>
            <span className='text-sm text-zinc-500'>40 anos</span>
        </a>
    )
}