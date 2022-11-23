import React from 'react'
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className='about my-4 bg-neutral-800 flex flex-col items-center justify-center py-10 text-white text-center w-screen'>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <Image alt="feature" width={600} height={500} class="object-cover  object-center " src="/bodyBg.jfif" />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
    <div className="title text-3xl font-bold">
            know About us
         </div>
         <div className="content text-sm mt-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint dicta ab aspernatur, perferendis quaerat explicabo placeat est corporis vitae eius. Consectetur obcaecatiblanditiis voluptatum hic dolor necessitatibus. Asperiores nostrum ea iste, animi velit natus ducimus incidunt odio fuga blanditiis tempore commodi officiis provident? Ex cupiditate nesciunt placeat voluptas suscipit temporibus corporis quia repudiandae rerum. Assumenda, accusamus aspernatur dignissimos ipsam repellat sequi modi sit ipsum distinctio quas? Similique ducimus deleniti nobis possimus totam voluptate beatae. adipisci blanditiis perferendis minus delectus! Nobis dicta fuga sit illo voluptatem ut ipsa. Ad voluptatem optio corrupti, consequatur eius itaque 
         </div>
    </div>
  </div>
    </div>
  )
}

export default About