import Footer from "./Footer";
import Navigasi from "./Navigasi";

export default function About(){
    return(
        <div>
            <Navigasi/>
        <div className=" mt-14">
             <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-5xl text-center font-bold text-black ">&#x1F935;About Me</h1>
        <div className="justify-center flex items-center mt-10">
                <img src="profile.png" className=" rounded-full w-[300px] h-[300px] outline transition-transform hover:scale-105" />
        </div>
        <div className="flex justify-center mt-10">
        <div className="mockup-code w-96 text-white">
  <pre data-prefix="$"><code>npm run dev</code></pre>
  <pre data-prefix="$"><code>Name : Ananda Lukman Ramadhan</code></pre>
  <pre data-prefix="$"><code>Carer : Students</code></pre>
  <pre data-prefix="$"><code>Junior Web Programing</code></pre>
</div>
</div>
</div>
<div>
    <Footer/>
</div>
        </div>
    )
}