import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import { Link } from "react-router-dom"
import Navigasi from "./Navigasi"
import Home from "../page/Home"
import Footer from "./Footer"
export default function Intro(){

    return(
        <div>
        <Navigasi/>
       <div className=" flex justify-center items-center">
        <div className=" text-black">
        <div class="flex items-center justify-center mt-12">
  <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-center font-bold text-black ">Wellcome to my Portofolio</h1>
</div>
            <br />
            <div className="flex justify-center items-center text-black font-nando text-2xl">
            <h1> Lets Check Begin !</h1>
            </div>
            <div className="flex justify-center items-center hover: cursor-zoom-out">
            </div>
            <div className="flex justify-center items-center">
                <div className=" w-[200px] h-[200px]">
            <button>
        <Link to="/home"><img src="finger.gif" alt="" /></Link>
      </button>
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