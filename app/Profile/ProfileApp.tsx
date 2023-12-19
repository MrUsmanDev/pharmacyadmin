'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useSession } from 'next-auth/react';
import { GetProfileData, GetBusinesHrs, UpdateProfile } from '@/utils/Profile/ProfileAPI';
import { Showmsg } from '@/utils/common';
const ProfileApp = () => {
    const [FromData, setFormData] = useState({
        PBID1: 0,
        PBID2: 0,
        PBID3: 0,
        PBID4: 0,
        PBID5: 0,
        PBID6: 0,
        PBID7: 0,
        Day1: '',
        Day2: '',
        Day3: '',
        Day4: '',
        Day5: '',
        Day6: '',
        Day7: '',
        OpenTime1: '',
        CloseTime1:'',
        OpenTime2: '',
        CloseTime2:'',
        OpenTime3: '',
        CloseTime3:'',
        OpenTime4: '',
        CloseTime4:'',
        OpenTime5: '',
        CloseTime5:'',
        OpenTime6: '',
        CloseTime6:'',
        OpenTime7: '',
        CloseTime7:'',
        IsOpen1: false,
        IsOpen2: false,
        IsOpen3: false,
        IsOpen4: false,
        IsOpen5: false,
        IsOpen6: false,
        IsOpen7: false,
        UserName:'',
        Email:'',
        PhoneNo: '',
        Address: '',
        Aboutme :''
    })
    const session : any = useSession()
    const UserID = session.data?.user[0]?.UserID
    useEffect(()=>{
        fetchData()
    },[UserID])
    const fetchData = async()=>{
     const res = await GetProfileData(UserID)
     const OrgArr = res.data.Data
     const res1 = await GetBusinesHrs(UserID)
     const BussArr = res1.data.Data
     if(OrgArr){
        setFormData({
            ...FromData,
            UserName:OrgArr[0].UserName,
            Email:OrgArr[0].Email,
            PhoneNo:OrgArr[0].PhoneNo,
            Address:OrgArr[0].Address,
            Aboutme :OrgArr[0].About,
            Day1: BussArr[0].Day,
            Day2: BussArr[1].Day,
            Day3: BussArr[2].Day,
            Day4: BussArr[3].Day,
            Day5: BussArr[4].Day,
            Day6: BussArr[5].Day,
            Day7: BussArr[6].Day,
            PBID1: BussArr[0].PBID,
            PBID2: BussArr[1].PBID,
            PBID3: BussArr[2].PBID,
            PBID4: BussArr[3].PBID,
            PBID5: BussArr[4].PBID,
            PBID6: BussArr[5].PBID,
            PBID7: BussArr[6].PBID,
            OpenTime1:  BussArr[0].OpenTime,
            CloseTime1: BussArr[0].CloseTime,
            OpenTime2:  BussArr[1].OpenTime,
            CloseTime2: BussArr[1].CloseTime,
            OpenTime3:  BussArr[2].OpenTime,
            CloseTime3: BussArr[2].CloseTime,
            OpenTime4:  BussArr[3].OpenTime,
            CloseTime4: BussArr[3].CloseTime,
            OpenTime5:  BussArr[4].OpenTime,
            CloseTime5: BussArr[4].CloseTime,
            OpenTime6:  BussArr[5].OpenTime,
            CloseTime6: BussArr[5].CloseTime,
            OpenTime7:  BussArr[6].OpenTime,
            CloseTime7: BussArr[6].CloseTime,
            IsOpen1: BussArr[0].IsOpen,
            IsOpen2: BussArr[1].IsOpen,
            IsOpen3: BussArr[2].IsOpen,
            IsOpen4: BussArr[3].IsOpen,
            IsOpen5: BussArr[4].IsOpen,
            IsOpen6: BussArr[5].IsOpen,
            IsOpen7: BussArr[6].IsOpen,
        })
     }
    }
    const SaveHandler = async ()=>{
        let UserObj = {
            UserID: UserID,
            UserName:FromData.UserName,
            Email:FromData.Email,
            PhoneNo: FromData.PhoneNo,
            Address: FromData.Address,
            Aboutme :FromData.Aboutme
        }
        let BussinessHrsObj=[
            {PBID: FromData.PBID1, Day:FromData.Day1, OpenTime: FromData.OpenTime1, CloseTime: FromData.CloseTime1, IsOpen: FromData.IsOpen1},
            {PBID: FromData.PBID2, Day:FromData.Day2, OpenTime: FromData.OpenTime2, CloseTime: FromData.CloseTime2, IsOpen: FromData.IsOpen2},
            {PBID: FromData.PBID3, Day:FromData.Day3, OpenTime: FromData.OpenTime3, CloseTime: FromData.CloseTime3, IsOpen: FromData.IsOpen3},
            {PBID: FromData.PBID4, Day:FromData.Day4, OpenTime: FromData.OpenTime4, CloseTime: FromData.CloseTime4, IsOpen: FromData.IsOpen4},
            {PBID: FromData.PBID5, Day:FromData.Day5, OpenTime: FromData.OpenTime5, CloseTime: FromData.CloseTime5, IsOpen: FromData.IsOpen5},
            {PBID: FromData.PBID6, Day:FromData.Day6, OpenTime: FromData.OpenTime6, CloseTime: FromData.CloseTime6, IsOpen: FromData.IsOpen6},
            {PBID: FromData.PBID7, Day:FromData.Day7, OpenTime: FromData.OpenTime7, CloseTime: FromData.CloseTime7, IsOpen: FromData.IsOpen7},
        ]
        const res = await UpdateProfile(UserObj, BussinessHrsObj)
        Showmsg(res)
        fetchData()  
    }
  
  return (
    <Suspense fallback={<p>Loading Page...</p>}>
    <div className="page-wrapper">
  <div className="content container-fluid">
  <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' sx={{ mb: 2}}  >Profile Settings </Typography>
        <Row>
        <Col  xs= {12} sm= {6} md= {4} lg= {4} xl= {4}>
          <TextField 
           id="standard-basic" 
           label="Pharmacy Name" 
           variant="outlined" 
           value={FromData.UserName}
           onChange={e=> setFormData({...FromData, UserName: e.target.value})}
           fullWidth
           />
          </Col>
            <Col  xs= {12} sm= {6} md= {4} lg= {4} xl= {4}>
          <TextField 
           id="standard-basic" 
           label="Email" 
           disabled={true}
           variant="outlined" 
           value={FromData.Email}
           onChange={e=> setFormData({...FromData, Email: e.target.value})}
           fullWidth
           />
          </Col>
            <Col  xs= {12} sm= {6} md= {4} lg= {4} xl= {4}>
          <TextField 
           id="standard-basic" 
           label="Phone Number" 
           value={FromData.PhoneNo}
           onChange={e=> setFormData({...FromData, PhoneNo: e.target.value})}
           variant="outlined" 
           fullWidth
           />
          </Col>
         
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {12} md= {12} lg= {12} xl= {12}>
          <TextField 
           id="standard-basic" 
           label="Address" 
           value={FromData.Address}
           onChange={e=> setFormData({...FromData, Address: e.target.value})}
           variant="outlined" 
           multiline
           rows={3}
           fullWidth
           />
          </Col>
        </Row>
        <Row className='mt-2'>    
        <Col  xs= {12} sm= {12} md= {12} lg= {12} xl= {12}>
          <TextField 
           id="standard-basic" 
           label="About me" 
           value={FromData.Aboutme}
           onChange={e=> setFormData({...FromData, Aboutme: e.target.value})}
           variant="outlined" 
           multiline
           rows={3}
           fullWidth
           />
          </Col>
        </Row>
        <Typography sx={{fontSize: 14, mt: 2}} >Set Bussines Hours </Typography>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}
           variant="outlined"
           value={FromData.Day1}
           onChange={e=> setFormData({...FromData, Day1: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time"
           value={FromData.OpenTime1}
           onChange={e=> setFormData({...FromData, OpenTime1: e.target.value})}
           type='time'
           variant="outlined"
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           value={FromData.CloseTime1} 
           onChange={e=> setFormData({...FromData, CloseTime1: e.target.value})}
           variant="outlined"
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
         checked={FromData.IsOpen1}
         onChange={e=> setFormData({...FromData, IsOpen1: e.target.checked})}
        />} label="Is Open" />
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}
           variant="outlined"
           value={FromData.Day2}
           onChange={e=> setFormData({...FromData, Day2: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time" 
           value={FromData.OpenTime2}
           onChange={e=> setFormData({...FromData, OpenTime2: e.target.value})}
           type='time'
           variant="outlined"
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           value={FromData.CloseTime2}
           onChange={e=> setFormData({...FromData, CloseTime2: e.target.value})}
           variant="outlined"
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
        checked={FromData.IsOpen2}
        onChange={e=> setFormData({...FromData, IsOpen2: e.target.checked})}
        />} label="Is Open" />
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}
           variant="outlined"
           value={FromData.Day3}
           onChange={e=> setFormData({...FromData, Day3: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time" 
           value={FromData.OpenTime3}
           onChange={e=> setFormData({...FromData, OpenTime3: e.target.value})}
           type='time'
           variant="outlined" 
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           value={FromData.CloseTime3}
           onChange={e=> setFormData({...FromData, CloseTime3: e.target.value})}
           variant="outlined"
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
          checked={FromData.IsOpen3}
          onChange={e=> setFormData({...FromData, IsOpen3: e.target.checked})}
        />} label="Is Open" />
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}
           variant="outlined"
           value={FromData.Day4}
           onChange={e=> setFormData({...FromData, Day4: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time" 
           value={FromData.OpenTime4}
           onChange={e=> setFormData({...FromData, OpenTime4: e.target.value})}
           type='time'
           variant="outlined" 
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           value={FromData.CloseTime4}
           onChange={e=> setFormData({...FromData, CloseTime4: e.target.value})}
           variant="outlined"
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
        checked = {FromData.IsOpen4}
        onChange={e=> setFormData({...FromData, IsOpen4: e.target.checked})}
        />} label="Is Open" />
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}    
           variant="outlined"
           value={FromData.Day5}
           onChange={e=> setFormData({...FromData, Day5: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time" 
           value={FromData.OpenTime5}
           onChange={e=> setFormData({...FromData, OpenTime5: e.target.value})}
           type='time'
           variant="outlined" 
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           value={FromData.CloseTime5}
           onChange={e=> setFormData({...FromData, CloseTime5: e.target.value})}
           variant="outlined"
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
        checked = {FromData.IsOpen5}
        onChange={e=> setFormData({...FromData, IsOpen5: e.target.checked})}
        />} label="Is Open" />
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}
           variant="outlined"
           value={FromData.Day6}
           onChange={e=> setFormData({...FromData, Day6: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time" 
           value={FromData.OpenTime6}
           onChange={e=> setFormData({...FromData, OpenTime6: e.target.value})}
           type='time'
           variant="outlined" 
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           variant="outlined"
           value={FromData.CloseTime6}
           onChange={e=> setFormData({...FromData, CloseTime6: e.target.value})}
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
        checked={FromData.IsOpen6}
        onChange={e=> setFormData({...FromData, IsOpen6: e.target.checked})}
        />} label="Is Open" />
        </Col>
        </Row>
        <Row className='mt-2'>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Day" 
           disabled={true}
           variant="outlined"
           value={FromData.Day7}
           onChange={e=> setFormData({...FromData, Day7: e.target.value})}
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Open Time" 
           value={FromData.OpenTime7}
           onChange={e=> setFormData({...FromData, OpenTime7: e.target.value})}
           type='time'
           variant="outlined" 
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3}>
         <TextField 
           id="standard-basic" 
           label="Close Time" 
           variant="outlined"
           value={FromData.CloseTime7}
           onChange={e=> setFormData({...FromData, CloseTime7: e.target.value})}
           type='time'
           fullWidth
           />
        </Col>
        <Col  xs= {12} sm= {4} md= {3} lg= {3} xl= {3} className='mt-2'>
        <FormControlLabel control={<Switch 
        checked={FromData.IsOpen7}
        onChange={e=> setFormData({...FromData, IsOpen7: e.target.checked})}
        />} label="Is Open" />
        
        </Col>
        </Row>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button 
          size="large" 
          variant='contained' 
          sx={{width:'250px'}}
          onClick={SaveHandler}
          >Save</Button>
  </CardActions>
    </Card>
  </div>
  </div>
 </Suspense>
  )
}

export default ProfileApp