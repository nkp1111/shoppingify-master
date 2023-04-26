import React from 'react'
import { RiListUnordered } from 'react-icons/ri'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'

const SidebarNav = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className='app__sidebar-nav'>
        <Link to="/">
          <div className={`nav-item ${path === "/" && "active"}`}>
            <RiListUnordered />
          </div>
        </Link>
        <Link to="/history">
          <div className={`nav-item ${path === "/history" && "active"}`}>
            <GiBackwardTime />
          </div>
        </Link>
        <Link to="/stat">
          <div className={`nav-item ${path === "/stat" && "active"}`}>
            <AiOutlineBarChart />
          </div>
        </Link>
      </div>
    </>
  )
}

export default SidebarNav
