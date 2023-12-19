import React from 'react'
interface DashboardCard {
  value : number,
  icon : string,
  PB: string,
  title: string,
  txtcolor : string,
}

const DashboardCards : React.FC<DashboardCard> = ({value, icon, PB, title, txtcolor}) => {
  return (
    <div className="col-xl-3 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <span className={`dash-widget-icon ${txtcolor}`}>
                    <i className={icon} />
                  </span>
                  <div className="dash-count">
                    <h3>{value}</h3>
                  </div>
                </div>
                <div className="dash-widget-info">
                  <h6 className="text-muted">{title}</h6>
                  <div className="progress progress-sm">
                    <div className={`progress-bar ${PB}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default DashboardCards