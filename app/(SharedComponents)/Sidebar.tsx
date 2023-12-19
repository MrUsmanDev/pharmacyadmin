import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <div className="sidebar" id="sidebar">
  <div className="sidebar-inner slimscroll">
    <div id="sidebar-menu" className="sidebar-menu">
      <ul>
        <li className="menu-title"> 
          <span>Main</span>
        </li>
        <li className={`${pathname === "/" && 'active'}`}> 
          <Link href={'/'}><i className="fe fe-home" /> <span>Dashboard</span></Link>
        </li>
        <li className={`${pathname === "/Products" && 'active'}`}> 
          <Link href={'/Products'}><i className="fe fe-home" /> <span>Products</span></Link>
        </li>
        <li className={`${pathname === "/Profile" && 'active'}`}> 
          <Link href="/Profile"><i className="fe fe-user-plus" /> <span>Profile</span></Link>
        </li>
        <li className={`${pathname === "/Setting" && 'active'}`}> 
          <Link href="/Settings"><i className="fe fe-user" /> <span>Setting</span></Link>
        </li>
        <li className={`${pathname === "/Reviews" && 'active'}`}> 
          <Link href="/Reviews"><i className="fe fe-star-o" /> <span>Reviews</span></Link>
        </li>
        <li className={`${pathname === "/Orders" && 'active'}`}> 
          <Link href="/Orders"><i className="fe fe-activity" /> <span>Orders</span></Link>
        </li>
       
       
        {/* <li className="menu-title"> 
          <span>Pages</span>
        </li>
        <li> 
          <a href="profile.html"><i className="fe fe-user-plus" /> <span>Profile</span></a>
        </li>
        <li className="submenu">
          <a href="#"><i className="fe fe-document" /> <span> Authentication </span> <span className="menu-arrow" /></a>
          <ul style={{display: 'none'}}>
            <li><a href="login.html"> Login </a></li>
            <li><a href="register.html"> Register </a></li>
            <li><a href="forgot-password.html"> Forgot Password </a></li>
            <li><a href="lock-screen.html"> Lock Screen </a></li>
          </ul>
        </li>
        <li className="submenu">
          <a href="#"><i className="fe fe-warning" /> <span> Error Pages </span> <span className="menu-arrow" /></a>
          <ul style={{display: 'none'}}>
            <li><a href="error-404.html">404 Error </a></li>
            <li><a href="error-500.html">500 Error </a></li>
          </ul>
        </li>
        <li> 
          <a href="blank-page.html"><i className="fe fe-file" /> <span>Blank Page</span></a>
        </li>
        <li className="menu-title"> 
          <span>UI Interface</span>
        </li>
        <li> 
          <a href="components.html"><i className="fe fe-vector" /> <span>Components</span></a>
        </li>
        <li className="submenu">
          <a href="#"><i className="fe fe-layout" /> <span> Forms </span> <span className="menu-arrow" /></a>
          <ul style={{display: 'none'}}>
            <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
            <li><a href="form-input-groups.html">Input Groups </a></li>
            <li><a href="form-horizontal.html">Horizontal Form </a></li>
            <li><a href="form-vertical.html"> Vertical Form </a></li>
            <li><a href="form-mask.html"> Form Mask </a></li>
            <li><a href="form-validation.html"> Form Validation </a></li>
          </ul>
        </li>
        <li className="submenu">
          <a href="#"><i className="fe fe-table" /> <span> Tables </span> <span className="menu-arrow" /></a>
          <ul style={{display: 'none'}}>
            <li><a href="tables-basic.html">Basic Tables </a></li>
            <li><a href="data-tables.html">Data Table </a></li>
          </ul>
        </li>
        <li className="submenu">
          <a href="javascript:void(0);"><i className="fe fe-code" /> <span>Multi Level</span> <span className="menu-arrow" /></a>
          <ul style={{display: 'none'}}>
            <li className="submenu">
              <a href="javascript:void(0);"> <span>Level 1</span> <span className="menu-arrow" /></a>
              <ul style={{display: 'none'}}>
                <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                <li className="submenu">
                  <a href="javascript:void(0);"> <span> Level 2</span> <span className="menu-arrow" /></a>
                  <ul style={{display: 'none'}}>
                    <li><a href="javascript:void(0);">Level 3</a></li>
                    <li><a href="javascript:void(0);">Level 3</a></li>
                  </ul>
                </li>
                <li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);"> <span>Level 1</span></a>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</div>

  )
}

export default Sidebar