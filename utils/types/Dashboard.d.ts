export interface AppointmentTable {
    DoctorID : number,
    Doctor : string,
    DoctorPic : string,
    AppDate : string,
    PatinetID : number,
    Patient : string,
    PatientPic : string,
    AppTime: string,
    AmtPaid: number,
 }
export interface DoctorTable {
    UserID: number,
    UserName: string,
    Specializations: string,
    Fee: number,
    ProfilePic: string,
    RegistrationDate?:string
  }
 export interface PatinetTable {
    UserID: number,
    UserName: string,
    PhoneNo: string,
    Paid: number,
    ProfilePic: string,
    LastAppointment: string
  }