"use client"
import { GetFileFromLocalDirectory, SelectLists, SelectTotals } from '@/utils/Dashboard/DashboardAPI'
import React, {useState, useEffect} from 'react'
import AlertMessage from './AlertMessage'
import DashboardCards from './DashboardCards'
import { convertTo12HourFormat } from '@/utils/common'
import { useRouter } from 'next/navigation'
import { AppointmentTable, PatinetTable, DoctorTable } from '@/utils/types/Dashboard'
const Main = () => {
  const router = useRouter()
  const [TotalDoctors, setTotalDoctors] = useState(0)
  const [TotalPatinets, setTotalPatients] = useState(0)
  const [TodayAppointments, setTodayAppointments] = useState(0)
  const [TodayRevenue, setTodayRevenue] = useState(0)
  const [APIErr, setAPIErr] = useState(false)
  const [ErrMsg, setErrMsg] = useState('')
  const [AlertType, setAlertType] = useState('')
  const [DoctorPB, setDoctorPB] = useState('')
  const [PatinetPB, setPatinetPB] = useState('')
  const [AppointmentPB, setAppointmentPB] = useState('')
  const [TodayRevenuePB, setTodayRevenuePB] = useState('')  
  const [DoctorList, setDoctorList] = useState([])
  const [PatinetsList, setPatinetsList] = useState([])
  const [AppointmentList, setAppointmentList] = useState([])
  
    useEffect(()=>{
      fetchTotalDoctors()
      fetchTotalPatients()
      fetchTodayAppointments()
      fetchTodayRevenue()
      fetchDoctorsList()
      fetchPatientsList()
      fetchAppointmentList()
      router.refresh()
    }, [])
  
     
    const fetchTotalDoctors = async() =>{
      const res = await SelectTotals('SelectTotalDoctors')
      if(res.status){
          setTotalDoctors(res.data.TotalDoctor)
          res.data.TotalDoctor > 0 && setDoctorPB(`bg-primary w-${res.data.TotalDoctor}`)
      }else{
        setAPIErr(true)
        setErrMsg('Request Failed with API Total Doctors')
        setAlertType('alert-danger')
        setTimeout(() => {
          setAPIErr(false);
          setErrMsg('');
          setAlertType('');
        }, 2000);
      }
    }
    const fetchTotalPatients = async() =>{
      const res = await SelectTotals('SelectTotalPatients')
      if(res.status){
        setTotalPatients(res.data.TotalPatients)
          res.data.TotalPatients > 0 && setPatinetPB(`bg-success w-${res.data.TotalPatients}`)
      }else{
        setAPIErr(true)
        setErrMsg('Request Failed with API Total Patients')
        setAlertType('alert-danger')
        setTimeout(() => {
          setAPIErr(false);
          setErrMsg('');
          setAlertType('');
        }, 2000);
      }
    }
    const fetchTodayAppointments = async() =>{
      const res = await SelectTotals('SelectTodayAppointments')
      if(res.status){
        setTodayAppointments(res.data.TodayAppointments)
          res.data > 0 && setAppointmentPB(`bg-danger w-${res.data.TodayAppointments}`)
      }else{
        setAPIErr(true)
        setErrMsg('Request Failed with API Today Appointments')
        setAlertType('alert-danger')
        setTimeout(() => {
          setAPIErr(false);
          setErrMsg('');
          setAlertType('');
        }, 2000);
      }
    }
    const fetchTodayRevenue = async() =>{
      const res = await SelectTotals('SelectTodayRevenue')
      if(res.status){
        setTodayRevenue(res.data.TodayRevenue)
          res.data.TodayRevenue > 0 && setTodayRevenuePB(`bg-warning w-${res.data.TodayRevenue}`)
      }else{
        setAPIErr(true)
        setErrMsg('Request Failed with API Today Revenue')
        setAlertType('alert-danger')
        setTimeout(() => {
          setAPIErr(false);
          setErrMsg('');
          setAlertType('');
        }, 2000);
      }
    }
    const fetchDoctorsList = async() =>{
        const res = await SelectLists('SelectDoctorLists')
        if(res.status){
          const mArr = res.data
          for (let i = 0; i < mArr.length; i++) {
            mArr[i].ProfilePic = await GetFileFromLocalDirectory(mArr[i].ProfilePic);
        }
            setDoctorList(mArr)
        }else{
          setAPIErr(true)
          setErrMsg('Request Failed with API Doctors List')
          setAlertType('alert-danger')
          setTimeout(() => {
            setAPIErr(false);
            setErrMsg('');
            setAlertType('');
          }, 2000);
        }
    }
    const fetchPatientsList = async() =>{
      const res = await SelectLists('SelectPatinetsLists')
      if(res.status){
        const mArr = res.data
        for (let i = 0; i < mArr.length; i++) {
          mArr[i].ProfilePic = await GetFileFromLocalDirectory(mArr[i].ProfilePic);
      }
      setPatinetsList(mArr)
      }else{
        setAPIErr(true)
        setErrMsg('Request Failed with API Patinets List')
        setAlertType('alert-danger')
        setTimeout(() => {
          setAPIErr(false);
          setErrMsg('');
          setAlertType('');
        }, 2000);
      }
    }
    const fetchAppointmentList = async() =>{
      const res = await SelectLists('SelectAppointmentLists')
      if(res.status){
        const mArr = res.data
        for (let i = 0; i < mArr.length; i++) {
          mArr[i].DoctorPic = await GetFileFromLocalDirectory(mArr[i].DoctorPic);
          mArr[i].PatientPic = await GetFileFromLocalDirectory(mArr[i].PatientPic);
      }
      setAppointmentList(mArr)
      }else{
        setAPIErr(true)
        setErrMsg('Request Failed with API Appointment List')
        setAlertType('alert-danger')
        setTimeout(() => {
          setAPIErr(false);
          setErrMsg('');
          setAlertType('');
        }, 2000);
      }
    }
  return (
    <div className="page-wrapper">
  <div className="content container-fluid">
    {/* Page Header */}
     {APIErr && <AlertMessage message={ErrMsg} alertType={AlertType} />}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">Welcome Admin!</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item active">Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
        <div className="row">
           {/*Today Doctors*/}
           <DashboardCards value={TotalDoctors} icon='fe fe-users' PB={DoctorPB} title='Doctors' txtcolor='text-primary border-primary'/>
           {/*Today Patients*/}
           <DashboardCards value={TotalPatinets} icon='fe fe-credit-card' PB={PatinetPB} title='Patients' txtcolor=' text-success border-success' />
         
           {/*Today Appointments*/}
           <DashboardCards value={TodayAppointments} icon='fe fe-money' PB={AppointmentPB} title='Today Appointment' txtcolor='text-danger border-danger' />
         
          {/*Today Revenue*/}
          <DashboardCards value={TodayRevenue} icon='fe fe-folder' PB={TodayRevenuePB} title='Today Revenue' txtcolor='text-warning border-warning' />
         
        </div>
         {/*Charts */}
        <div className="row">
          <div className="col-md-12 col-lg-6">
            {/* Sales Chart */}
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Revenue</h4>
              </div>
              <div className="card-body">
                <div id="morrisArea" />
              </div>
            </div>
            {/* /Sales Chart */}
          </div>
          <div className="col-md-12 col-lg-6">
            {/* Invoice Chart */}
            <div className="card card-chart">
              <div className="card-header">
                <h4 className="card-title">Status</h4>
              </div>
              <div className="card-body">
                <div id="morrisLine" />
              </div>
            </div>
            {/* /Invoice Chart */}
          </div>	
        </div>
        <div className="row">
          <div className="col-md-6 d-flex">
            {/* Recent Orders */}
            <div className="card card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Doctors List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Earned</th>
                        <th>Reviews</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      DoctorList.map((item : DoctorTable)=> (
                        <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.ProfilePic} alt="User Image" /></a>
                            <a href="profile.html">{item.UserName}</a>
                          </h2>
                        </td>
                        <td>{item.Specializations}</td>
                        <td>{item.Fee}</td>
                        <td>
                          <i className="fe fe-star text-warning" />
                          <i className="fe fe-star text-warning" />
                          <i className="fe fe-star text-warning" />
                          <i className="fe fe-star text-warning" />
                          <i className="fe fe-star-o text-secondary" />
                        </td>
                      </tr>
                      ))
                    }
                     
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
          <div className="col-md-6 d-flex">
            {/* Feed Activity */}
            <div className="card  card-table flex-fill">
              <div className="card-header">
                <h4 className="card-title">Patients List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>													
                        <th>Patient Name</th>
                        <th>Phone</th>
                        <th>Last Visit</th>
                        <th>Paid</th>													
                      </tr>
                    </thead>
                    <tbody>
                      {
                        PatinetsList.map((item : PatinetTable)=>(
                      <tr>
                        <td>
                          <h2 className="table-avatar">
                            <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.ProfilePic} alt="User Image" /></a>
                            <a href="profile.html">{item.UserName} </a>
                          </h2>
                        </td>
                        <td>{item.PhoneNo}</td>
                        <td>{item.LastAppointment}</td>
                        <td className="text-right">{item.Paid}</td>
                      </tr>   
                        ))
                      }
                      
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Feed Activity */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Recent Orders */}
            <div className="card card-table">
              <div className="card-header">
                <h4 className="card-title">Appointment List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="datatable table table-hover table-center mb-0">
                    <thead>
                      <tr>
                        <th>Doctor Name</th>
                        
                        <th>Patient Name</th>
                        <th>Apointment Time</th>
                        
                        <th className="text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        AppointmentList.map((item: AppointmentTable)=>(
                          <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.DoctorPic} alt="User Image" /></a>
                              <a href="profile.html">{item.Doctor}</a>
                            </h2>
                          </td>
                         
                          <td>
                            <h2 className="table-avatar">
                              <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={item.PatientPic} alt="User Image" /></a>
                              <a href="profile.html">{item.Patient} </a>
                            </h2>
                          </td>
                          <td>{item.AppDate} <span className="text-primary d-block">{convertTo12HourFormat( item.AppTime)}</span></td>
                          {/* <td>
                            <div className="status-toggle">
                              <input type="checkbox" id="status_1" className="check" defaultChecked />
                              <label htmlFor="status_1" className="checktoggle">checkbox</label>
                            </div>
                          </td> */}
                          <td className="text-right">
                           {item.AmtPaid}
                          </td>
                        </tr>
                        ))
                      }
                     
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* /Recent Orders */}
          </div>
        </div>
  </div>			
</div>

  )
}

export default Main