import Image from 'next/image'

export default function Home() {
  return (
    <main>

      <nav class="bg-[#500000] flex justify-between px-10 items-center py-6">
        <div class="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h1 class="text-white font-bold text-xl cursor-pointer">GITHUB CODER</h1>
        </div>
        <div class="flex items-center space-x-8 font-bold text-white">
          <span class="cursor-pointer text-lg">Hone</span>
          <span class="cursor-pointer text-lg">About</span>
        </div>
      </nav>





      
    </main>
  )
}
