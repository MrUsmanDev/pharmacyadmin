import { Login } from '@/utils/Login/LoginAPI'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
const {NEXTAUTH_SECRET} = process.env
export const options: NextAuthOptions = {
    
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                Email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your email"
                },
                Password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your password"
                }
            },
            async authorize(credentials) {
                if (credentials?.Email && credentials?.Password) {
                    const res = await Login(credentials.Email, credentials.Password, "Pharmacy");
                            if(res.status){
                                let mData = res.data.Data
                                if(mData.length > 0)
                                return  mData
                                else 
                                return null
                                // const updatedUser = {
                                //     UserID: mData?.UserID,
                                //     UserName: mData?.UserName,
                                //     Email: mData?.Email,
                                //     Password: mData?.Password,
                                //     PhoneNo: mData?.PhoneNo,
                                //     UserType: mData?.UserType,
                                //     IsPhoneVarified: mData?.IsPhoneVarified,
                                //     IsEmailVarified: mData?.IsEmailVarified,
                                //     DocumentType: mData?.DocumentType,
                                //     DocumentNo: mData?.DocumentNo,
                                //     DocumentPic: mData?.DocumentPic,
                                //     ProfilePic: mData?.ProfilePic,
                                //     Gender: mData?.Gender,
                                //     DOB: mData?.DOB,
                                //     Address: mData?.Address,
                                //     CountryID: mData?.CountryID,
                                //     CityID: mData?.CityID,
                                //     About: mData?.About,
                                //     MedicalRegistrationNo: mData?.MedicalRegistrationNo,
                                //     SpecializationID: mData?.SpecializationID,
                                //     NameOnCard: mData?.NameOnCard,
                                //     CardExpairyMonth: mData?.CardExpairyMonth,
                                //     CardExpairyYear: mData?.CardExpairyYear,
                                //     CVV: mData?.CVV,
                                //     CardNo: mData?.CardNo,
                                //     IsSaveCard: mData?.IsSaveCard,
                                //     Currancy: mData?.Currancy,
                                //     ConsultationAmt: mData?.ConsultationAmt,
                                //     IsAudioCall: mData?.IsAudioCall,
                                //     IsVedioCall: mData?.IsVedioCall,
                                //     IsChat: mData?.IsChat,
                                //     Language: mData?.Language,
                                //     Weight: mData?.Weight,
                                //     WeightUOM: mData?.WeightUOM,
                                //     Height: mData?.Height,
                                //     HeightUOM: mData?.HeightUOM,
                                //     Age: mData?.Age,
                                //     BloodGroup: mData?.BloodGroup,
                                //     HeartRate: mData?.HeartRate,
                                //     BP: mData?.BP,
                                //     GlucoseLevel: mData?.GlucoseLevel,
                                //     Allergies: mData?.Allergies,
                                //     IsPreExistingCondition: mData?.IsPreExistingCondition,
                                //     IsAlreadyTakeMedicain: mData?.IsAlreadyTakeMedicain,
                                //     IsPregnent: mData?.IsPregnent,
                                //     PregnancyMonth: mData?.PregnancyMonth,
                                //     IsSelf: mData?.IsSelf,
                                //     IsSpouse: mData?.IsSpouse,
                                //     IsMother: mData?.IsMother,
                                //     IsFather: mData?.IsFather,
                                //     NoOfChild: mData?.NoOfChild,
                                //     SpouseName: mData?.SpouseName,
                                //     SpouseAge: mData?.SpouseAge,
                                //     SpousePic: mData?.SpousePic,
                                //     MotherName: mData?.MotherName,
                                //     MotherAge: mData?.MotherAge,
                                //     MotherPic: mData?.MotherPic,
                                //     FatherName: mData?.FatherName,
                                //     FatherAge: mData?.FatherAge,
                                //     FatherPic: mData?.FatherPic,
                                //     RegistrationDate: mData?.RegistrationDate,
                                //     FirstName: mData?.FirstName,
                                //     LastName: mData?.LastName,
                                //     Address2: mData?.Address2,
                                //     PostalCode: mData?.PostalCode,
                                // }
                                // return {
                                //     ...updatedUser,
                                //     // ...user.response,
                                //     randomKey: 'Hey cool Mansss',
                                //   }
                            }else {
                                return null
                            }
                  } 
                
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret : NEXTAUTH_SECRET,
    pages : {
        signIn : "/SignIn"
    },
    callbacks: {
        session: ({ session, token, user }) => {
          return {
            ...session,
            user: {
              ...token
            }
          }
        },
        jwt: ({ token, user, trigger, session }) => {
          if (user) {
            const u = user as unknown as any
            return {
              ...token,
              id: u.id,
              randomKey: u.randomKey,
              ...u
            }
          }
          return token
        },
    
      }
}