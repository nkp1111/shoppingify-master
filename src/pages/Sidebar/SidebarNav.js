import React from 'react'
import { RiListUnordered } from 'react-icons/ri'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { Link, useLocation } from 'react-router-dom'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const SidebarNav = () => {

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <div className='app__sidebar-nav'>
        <Link to="/">
          <div className={`nav-item ${path === "/" && "active"}`}
            data-tooltip-id="home"
            data-for="home">
            <RiListUnordered />
            <Tooltip
              id="home"
              effect="solid"
              arrowColor="#fff"
              className='tooltip'
              classNameArrow="tooltip-arrow"
            >
              Items
            </Tooltip>
          </div>
        </Link>
        <Link to="/history">
          <div className={`nav-item ${path === "/history" && "active"}`}
            data-tooltip-id="history"
            data-for="history">
            <GiBackwardTime />
            <Tooltip
              id="history"
              effect="solid"
              arrowColor="#fff"
              className='tooltip'
              classNameArrow="tooltip-arrow"
            >
              History
            </Tooltip>
          </div>
        </Link>
        <Link to="/stat">
          <div className={`nav-item ${path === "/stat" && "active"}`}
            data-tooltip-id="stats"
            data-for="stats"
            data-tooltip-offset={10}>
            <AiOutlineBarChart />
            <Tooltip
              id="stats"
              effect="solid"
              arrowColor="#fff"
              className='tooltip'
              classNameArrow="tooltip-arrow"
            >
              Statistics
            </Tooltip>
          </div>
        </Link>
      </div>
    </>
  )
}

export default SidebarNav
