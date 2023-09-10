import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer1 from '../../components/Footer/Footer1'
import Footer2 from '../../components/Footer/Footer2'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSettings from '../../components/UserProfile/AccountSettings'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import YourOrders from '../../components/UserProfile/YourOrders'
import Address from '../../components/UserProfile/Address'
import LegalNotice from '../../components/UserProfile/LegalNotice'
import './UserProfile.css'

const UserProfile = () => {
    const {activepage} = useParams()
  return (
    <div className='userprofile'>
      <Navbar/>
      <div className='userprofilein'>
        <div className='left'>
            <UserSidebar activepage={activepage}/>
        </div>
        <div className='right'>
            {activepage === "accountsettings" && <AccountSettings/>}
            {activepage === 'changepassword' && <ChangePassword/>}
            {activepage === 'yourorders' && <YourOrders/>}
            {activepage === 'address' && <Address/>}
            {activepage === 'legalnotice' && <LegalNotice/>}
        </div>
      </div>
      <Footer1/>
      <Footer2/>
    </div>
  )
}

export default UserProfile
