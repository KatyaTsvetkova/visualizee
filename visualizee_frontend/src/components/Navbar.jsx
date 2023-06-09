import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io'
import { MdSwitchAccessShortcutAdd } from 'react-icons/md'


const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  return (
    <div className=" flex gap-2 mid:gap-5 w-full mt-5 pb-7" >
      <div className="flex justify-start items-center w-full px-2 roundet-md bg-whtie border-none focus-within:shadow-sm">
        <IoMdSearch fontSize={35} className=" ml-1 mr-5" />
        <input type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-3 ">
        <Link to="/create-pin" className="bg-red-500 text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
          <MdSwitchAccessShortcutAdd fontSize={30} />
        </Link>
        <Link to={`user-profile/${user?._id}`} className="hidden md:block">
          <img src={user?.image} alt="user" className="w-14 h-12 rounded-lg" />
        </Link>

      </div>
    </div>
  )
}
export default Navbar 