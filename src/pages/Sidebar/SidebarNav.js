import React from 'react'
import { RiListUnordered } from 'react-icons/ri'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SidebarNav = () => {
  return (
    <>
      <div className='app__sidebar-nav'>
        <div className="nav-item list-items">
          <Link to="/">
            <RiListUnordered />
          </Link>
        </div>
        <div className="nav-item history-items">
          <Link to="/history">
            <GiBackwardTime />
          </Link>
        </div>
        <div className="nav-item stats-items">
          <Link to="/stat">
            <AiOutlineBarChart />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SidebarNav
