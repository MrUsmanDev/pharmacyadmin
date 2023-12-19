import React from 'react'

interface AlertMessageProps {
message: string,
alertType: string
}
const AlertMessage : React.FC<AlertMessageProps> = ({message, alertType}) =>{
    return (
        <div className={`alert ${alertType} alert-dismissible fade show`} role="alert">
                    <strong>{message}</strong>
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
      )
}


export default AlertMessage