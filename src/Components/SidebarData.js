import React from 'react'

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
//import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Status',
        path:'/Status',
        icon: <MdIcons.MdViewList/>,
        cName: 'nav-text'
    },
    {
        title:'Your Achievements',
        path:'/Achievements',
        icon: <GiIcons.GiAchievement/>,
        cName: 'nav-text'
    },
    {
        title:'FAQ',
        path:'/Faq',
        icon: <FaIcons.FaQuestionCircle/>,
        cName: 'nav-text'
    },
    {
        title:'About Citizen-app',
        path:'/About',
        icon: <AiIcons.AiFillInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title:'Privacy Policy',
        path:'/Privacy',
        icon: <MdIcons.MdPrivacyTip/>,
        cName: 'nav-text'
    },
    {
        title:'Feedback',
        path:'/Feedback',
        icon: <MdIcons.MdFeedback/>,
        cName: 'nav-text'
    },
    {
        title:'Contact Us',
        path:'/Contact',
        icon: <AiIcons.AiTwotoneContacts/>,
        cName: 'nav-text'
    },
    {
        title:'Share Citizen-app',
        path:'/Share',
        icon:<BsIcons.BsShareFill/>,
        cName: 'nav-text'
    },
    {
        title:'Log Out',
        path:'/Logout',
        icon:<RiIcons.RiLogoutBoxRFill/>,
        cName: 'nav-text'
    },
]
