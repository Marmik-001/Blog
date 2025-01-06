// export default function DashboardSideBar() {
//   return (
//     <div></div>
//   )
// }
import React, { useState } from 'react'


// icons
import { MdMenuOpen } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';






export default function DashboardSideBar({setTab}) {
    const menuItems = [
        {
          icons: <CgProfile size={30} />,
          label: 'Profile',
          handleClick: (() => {
            setTab('profile')
            navigate('?tab=profile')})
        },
        {
          icons: <FaProductHunt size={30} />,
          label: 'Products',
          handleClick: (() => {})
        },
        {
          icons: <MdOutlineDashboard size={30} />,
          label: 'Dashboard',
          handleClick: (() => {})
        },
        {
          icons: <CiSettings size={30} />,
          label: 'Setting',
          handleClick: (() => {})
        }
      ]

  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
    const { currentUser } = useSelector((state) => state.user);
    const logo =  currentUser.profilePicture;
    const username = currentUser.username;
    const email = currentUser.email;
  return (
    <nav className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-emerald-50 text-black dark:text-emerald-200 dark:bg-black ${open ? 'w-60' : 'w-16'}`}>

      {/* Header */}
      <div className=' px-3 py-2 h-20 flex justify-between items-center'>
        <img src={logo} alt="Logo" className={`${open ? 'w-10' : 'w-0'} rounded-md`} />
        <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} /></div>
      </div>

      {/* Body */}

      <ul className='flex-1'>
        {
          menuItems.map((item, index) => {
            return (
              <li key={index} onClick={item.handleClick} className='px-3 py-2 my-2  dark:hover:bg-gray-800 hover:bg-emerald-200 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                <div>{item.icons}</div>
                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>{item.label}</p>
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}>{item.label}</p>
              </li>
            )
          })
        }
      </ul>
      {/* footer */}
      <div className='flex items-center gap-2 px-3 py-3 border-t-2 border-t-emerald-700 '>
        <div><FaUserCircle size={30} /></div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          { username && <p>{username}</p>}
          <span className='text-xs'>{email}</span>

        </div>
      </div>


    </nav>
  )
}
