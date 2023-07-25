import { Link } from 'react-router-dom';
export default function Navigasi(){
    return(
        <div className="navbar bg-white w-full drop-shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <img src="book.gif" className=" h-12"/>
      </label>
      <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black rounded-box w-52"
    >
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/home">About Me</Link>
      </li>
      <li>
        <Link to="/technology">Technology</Link>
      </li>
      <li>
        <Link to="/project">Project</Link>
      </li>
    </ul>
    </div>
  </div>
  <div className="navbar-center ml-12">
   <Link to='/'><a className="btn btn-ghost normal-case text-4xl text-black">Ananda .LR</a></Link>
  </div>
  <div className="navbar-end">
      </div>

     {/* Open the modal using ID.showModal() method */}
<button className="btn outline-blue-500 bg-white text-black  font-nando hover:bg-black-500 hover:text-white" onClick={()=>window.my_modal_5.showModal()}>For You</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <form method="dialog" className="modal-box bg-black text-white outline-blue">
    <h3 className="font-bold text-lg">&#x1F44B;Hello!</h3>
    <p className="py-4">Welcome to My Portfolio!

Here, you will find my best works that reflect passion and dedication in the world of design and development. I hope you enjoy exploring and discover something intriguing in every corner.

Thank you!</p>
    <div className="modal-action">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn bg-white text-black hover:bg-black hover:text-white">Close</button>
    </div>
  </form>
</dialog>
  </div>

    )
}