'use client'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { setUsers } from '@/redux/features/LoginSlice'
import { signOut } from 'next-auth/react'
import { persistor } from "@/redux/store";
import { Showmsg } from '@/utils/common';
import { useSession } from 'next-auth/react';
import { ChangePassword } from '@/utils/Settings/SettingsAPI';
import { useAppDispatch } from '@/redux/hooks'

const SettingsApp = () => {
    const [oldPassword, setoldPassword] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const [RepeatPassword, setRepeatPassword] = useState('')
    const session : any = useSession()
    const UserID = session.data?.user[0]?.UserID
    const dispatch= useAppDispatch()
    const isEmpty = (value : any, fieldName : string) => {
            
        if (value.trim() === '') {
            Showmsg(`Please Enter ${fieldName}`);
            return true;
        }
        return false;
    };
    const ChangePasswordHandler = async () => {
        if (isEmpty(oldPassword, 'Old Password') || isEmpty(newPassword, 'New Password') || isEmpty(RepeatPassword, 'Repeat Password')) {
            return;
        }
    
        if (newPassword !== RepeatPassword) {
            Showmsg('New and Repeat Password should Match');
            return;
        }
            let ChangePasswordObj = {
                UserID:UserID,
                OldPassword: oldPassword,
                NewPassword: newPassword
            }
           const res = await ChangePassword(ChangePasswordObj)
           if(!res.status){
            Showmsg('Something went wrong API Error')
           }else{
               Showmsg(res.data.message)
               setoldPassword('')
               setnewPassword('')
               setRepeatPassword('')
               dispatch(setUsers([]))
                await signOut({ callbackUrl: '/SignIn' });
                persistor.purge()
           }
    };
    
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
        <Card>
        <CardContent>
            <Typography variant='h5'>Change Password</Typography>
            <Row>
            <Col  xs= {12} sm= {6} md= {3} lg= {3} xl= {3}>
            <TextField 
                id="standard-basic" 
                label="Old Password" 
                variant="outlined" 
                value={oldPassword}
                error={oldPassword === '' ? true : false}
                onChange={e=> setoldPassword(e.target.value)}
                fullWidth
                />
            </Col>
            <Col  xs= {12} sm= {6} md= {3} lg= {3} xl= {3}>
            <TextField 
                id="standard-basic" 
                label="New Password" 
                variant="outlined" 
                value={newPassword}
                error={newPassword === '' ? true : false}
                onChange={e=> setnewPassword(e.target.value)}
                fullWidth
                />
            </Col>
            <Col  xs= {12} sm= {6} md= {3} lg= {3} xl= {3}>
            <TextField 
                id="standard-basic" 
                label="Repeat Password" 
                variant="outlined" 
                value={RepeatPassword}
                error={RepeatPassword === '' ? true : false}
                onChange={e=> setRepeatPassword( e.target.value)}
                fullWidth
                />
            </Col>
            <Col  xs= {12} sm= {6} md= {3} lg= {3} xl= {3}>
                <Button variant='contained' size='large' fullWidth onClick={ChangePasswordHandler}>Change Password</Button>
            </Col>
            </Row>

        </CardContent>
        </Card>
    </div>
    </div>
  )
}

export default SettingsApp