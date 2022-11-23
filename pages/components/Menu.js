import Image from 'next/image'
import React from 'react'

const Menu = () => {
  return (
    <div>
        <section class="text-white bg-transparent body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Menu</h1>
    </div>
    <div class="flex flex-wrap justify-center -m-4">
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <Image alt="gallery" width={300} height={600} class="absolute inset-0 w-full object-cover object-center h-full" src="/body-bg.webp" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-transparent opacity-0 hover:opacity-100 text-center">
            <h1 class="title-font text-xl font-bold text-white my-10">Shooting Stars</h1>
          </div>
        </div>
    </div>
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <Image alt="gallery" width={300} height={600} class="absolute inset-0 w-full object-cover object-center h-full" src="/body-bg.webp" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-transparent opacity-0 hover:opacity-100 text-center">
            <h1 class="title-font text-xl font-bold text-white my-10">Shooting Stars</h1>
          </div>
        </div>
    </div>
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <Image alt="gallery" width={300} height={600} class="absolute inset-0 w-full object-cover object-center h-full" src="/body-bg.webp" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-transparent opacity-0 hover:opacity-100 text-center">
            <h1 class="title-font text-xl font-bold text-white my-10">Shooting Stars</h1>
          </div>
        </div>
    </div>
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <Image alt="gallery" width={300} height={600} class="absolute inset-0 w-full object-cover object-center h-full" src="/body-bg.webp" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-transparent opacity-0 hover:opacity-100 text-center">
            <h1 class="title-font text-xl font-bold text-white my-10">Shooting Stars</h1>
          </div>
        </div>
    </div>
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <Image alt="gallery" width={300} height={600} class="absolute inset-0 w-full object-cover object-center h-full" src="/body-bg.webp" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-transparent opacity-0 hover:opacity-100 text-center">
            <h1 class="title-font text-xl font-bold text-white my-10">Shooting Stars</h1>
          </div>
        </div>
    </div>
    <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="flex relative">
          <Image alt="gallery" width={300} height={600} class="absolute inset-0 w-full object-cover object-center h-full" src="/body-bg.webp" />
          <div class="px-8 py-10 relative z-10 w-full border-4 border-red-500 bg-transparent opacity-0 hover:opacity-100 text-center">
            <h1 class="title-font text-xl font-bold text-white my-10">Shooting Stars</h1>
          </div>
        </div>
    </div>
  </div>
  </div>
</section>

    </div>
  )
}

export default Menu