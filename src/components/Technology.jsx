import Footer from "./Footer";
import Navigasi from "./Navigasi";

export default function Technology(){
    return(
      <div >
        <Navigasi/>
        <div className=" mt-14">
          
             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-5xl text-center font-bold text-black ">&#x1F527;Technology</h1>
              
             <div className="flex justify-center items-center mt-10">
             <div className="card w-96 bg-white shadow-xl">
  <figure className=" mt-14"><img src="3.png" /></figure>

  <div className="card w-96 bg-white shadow-xl">
  <figure><img src="php.png"  /></figure>

  <div class=" w-80 bg-white  p-4 ml-10 mb-20">
  <figure class="flex">
    <img src="laravel.png" alt="Gambar 1" class="w-1/3" />
    <img src="react.png" alt="Gambar 2" class="w-1/3" />
    <img src="tailwind.png" alt="Gambar 3" class="w-1/3" />
  </figure>
</div>
</div>
  </div>
  </div>
</div>
<div className="mt-52">
  <Footer/>
</div>
                </div>
    )
}