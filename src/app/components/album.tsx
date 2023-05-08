import { Play } from 'lucide-react'

export default function Album() {
    return (
        <div>
            
            <a href='#'  className=' bg-white/5 md:flex-col group rounded flex flex-col items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'> 
                 
                <img className='mt-2 rounded-xl' src="/mtemt.jpeg" width={180} height={180} alt="Capa Matogrosso e Mathias" />
                <div className='flex flex-col'>
                    <strong className='text-xl'>24 horas de amor</strong>
                    <strong className='text-zinc-400 text-sm'>Matogrosso e Mathias</strong>
                </div>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'>
                        <Play />
            </button> 
            </a >
 
        </div>
    )
}