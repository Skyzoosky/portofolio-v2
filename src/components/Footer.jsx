export default function Footer(){
  function masuk (social){
window.location.href = social;
  }
    return(
        <div className="mt-8">
        <footer className="footer items-center p-4 bg-white text-black">
  <div className="items-center grid-flow-col">
  <a className=" font-nando text-xl text-black">Ananda .LR</a>
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
<button><img src="github.png" className=" h-14" onClick={() => masuk ("https://github.com/Skyzoosky")} /></button>
<button><img src="ig.png" className=" h-9 mt-2.5" onClick={() => masuk ("https://www.instagram.com/nandakaws/")}/></button>
    
  </div>
</footer>
</div>
    )
}