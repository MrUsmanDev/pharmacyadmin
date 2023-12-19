'use client'
import { setUsers } from '@/redux/features/LoginSlice'
import { useAppDispatch } from '@/redux/hooks'
import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'
import { persistor } from "@/redux/store";
import { useRouter } from 'next/navigation'
const Header = () => {
  const router = useRouter();
  const dispatch= useAppDispatch()
  return (
   <div className="header">
  {/* Logo */}
  <div className="header-left">
    <a href="index.html" className="logo">
      <img src="assets/img/logo.png" alt="Logo" />
    </a>
    <a href="index.html" className="logo logo-small">
      <img src="assets/img/logo-small.png" alt="Logo" width={30} height={30} />
    </a>
  </div>
  {/* /Logo */}
  <a href="javascript:void(0);" id="toggle_btn">
    <i className="fe fe-text-align-left" />
  </a>
  <div className="top-nav-search">
    <form>
      <input type="text" className="form-control" placeholder="Search here" />
      <button className="btn" type="submit"><i className="fa fa-search" /></button>
    </form>
  </div>
  {/* Mobile Menu Toggle */}
  <a className="mobile_btn" id="mobile_btn">
    <i className="fa fa-bars" />
  </a>
  {/* /Mobile Menu Toggle */}
  {/* Header Right Menu */}
  <ul className="nav user-menu">
    {/* Notifications */}
    <li className="nav-item dropdown noti-dropdown">
      <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
        <i className="fe fe-bell" /> <span className="badge badge-pill">3</span>
      </a>
      <div className="dropdown-menu notifications">
        <div className="topnav-dropdown-header">
          <span className="notification-title">Notifications</span>
          <a href="javascript:void(0)" className="clear-noti"> Clear All </a>
        </div>
        <div className="noti-content">
          <ul className="notification-list">
            <li className="notification-message">
              <a href="#">
                <div className="media">
                  <span className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/doctors/doctor-thumb-01.jpg" />
                  </span>
                  <div className="media-body">
                    <p className="noti-details"><span className="noti-title">Dr. Ruby Perrin</span> Schedule <span className="noti-title">her appointment</span></p>
                    <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media">
                  <span className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient1.jpg" />
                  </span>
                  <div className="media-body">
                    <p className="noti-details"><span className="noti-title">Charlene Reed</span> has booked her appointment to <span className="noti-title">Dr. Ruby Perrin</span></p>
                    <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media">
                  <span className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient2.jpg" />
                  </span>
                  <div className="media-body">
                    <p className="noti-details"><span className="noti-title">Travis Trimble</span> sent a amount of $210 for his <span className="noti-title">appointment</span></p>
                    <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                  </div>
                </div>
              </a>
            </li>
            <li className="notification-message">
              <a href="#">
                <div className="media">
                  <span className="avatar avatar-sm">
                    <img className="avatar-img rounded-circle" alt="User Image" src="assets/img/patients/patient3.jpg" />
                  </span>
                  <div className="media-body">
                    <p className="noti-details"><span className="noti-title">Carl Kelly</span> send a message <span className="noti-title"> to his doctor</span></p>
                    <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <a href="#">View all Notifications</a>
        </div>
      </div>
    </li>
    {/* /Notifications */}
    {/* User Menu */}
    <li className="nav-item dropdown has-arrow">
      <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
        <span className="user-img"><img className="rounded-circle" src="assets/img/profiles/avatar-01.jpg" width={31} alt="Ryan Taylor" /></span>
      </a>
      <div className="dropdown-menu">
        <div className="user-header">
          <div className="avatar avatar-sm">
            <img src="assets/img/profiles/avatar-01.jpg" alt="User Image" className="avatar-img rounded-circle" />
          </div>
          <div className="user-text">
            <h6>Ryan Taylor</h6>
            <p className="text-muted mb-0">Administrator</p>
          </div>
        </div>
        <Link className="dropdown-item" href="/Profile">My Profile</Link>
        <Link className="dropdown-item" href="/Settings">Settings</Link>
        <a className="dropdown-item" onClick={async()=>{
       dispatch(setUsers([]))
       await signOut({ callbackUrl: '/SignIn' });
       persistor.purge()
      //  router.push('/SignIn')
        }}>Logout</a>
      </div>
    </li>
    {/* /User Menu */}
  </ul>
  {/* /Header Right Menu */}
</div>

  )
}

export default Header