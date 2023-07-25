import Footer from "./Footer";
import Navigasi from "./Navigasi";

function pindah(url){
  window.location.href = url;
}

export default function Project(){
    return(
        <div>
            <Navigasi/>
        <div className="mt-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-5xl text-center font-bold text-black ">&#x1F919;Project</h1>
        </div>

<div className="grid justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">

<div className="card w-96 bg-white text-black shadow-xl">
<figure className="px-10 pt-10">
    <img src="zakat.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center mt-1">
    <h2 className="card-title">Crud Data Zakat</h2>
    <div className="card-actions">
      <button className="btn bg-white text-black hover:bg-black hover:text-white" onClick={() => pindah ("http://datazakat.rf.gd/")}> Check Now</button>
    </div>
  </div>
  
</div>

<div className="card w-96 bg-white text-black shadow-xl">
<figure className="px-10 pt-10">
    <img src="pixel.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center mt-1">
    <h2 className="card-title">Wallpaper Installing</h2>
    <div className="card-actions">
      <button className="btn bg-white text-black hover:bg-black hover:text-white" onClick={() => pindah ("http://nandoopixel.rf.gd/")}>Check Now</button>
    </div>
  </div>
  
</div>

<div className="card w-96 bg-white text-black shadow-xl">
<figure className="px-10 pt-10">
    <img src="topup.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center mt-1">
    <h2 className="card-title">Top Up Shop</h2>
  
    <div className="card-actions">
      <button className="btn bg-white text-black hover:bg-black hover:text-white" onClick={() => pindah ("http://skyzoostore.epizy.com/")}>Check Now</button>
    </div>
  </div>
  
</div>


</div>


        </div>

        <div>
          <Footer/>
        </div>
        </div>
      


    )
}