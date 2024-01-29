import React from 'react'
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import "../pages/Upload.css";
import "../components/Sidebar.css"
function Sidebar() {

    const [activeLink, setActiveLink] = useState('');
          
    useEffect(() => {
      
      setActiveLink(`/dashboard`);
     
    }, [])

    const handleClick = (link) => {
        setActiveLink(link);
      };

  return (
    <>
     <div className="upload-inner">
        <div className="menu-wrapper">
          <nav className="menu">
            <div className="bg" />
            <div className="upload-frame">
              <div className="category-frame">
                <div className="dashboard-text">
                  <div><img className="subtract-icon" alt="" src="/subtract.svg" />
                  <img
                    className="subtract-icon1"
                    loading="eager"
                    alt=""
                    src="/subtract.svg"
                  /></div>
                  <div><h2 className ="name">Base</h2></div>
                  
                </div>
                
              </div>
            </div>

           
            
            <div className="sidebar_content">
            <Link
        to={`/dashboard`} 
        onClick={() => handleClick(`/dashboard` )} className="sidebar_link" >
          
             <img
                  className="sidebar_icon"
                  loading="eager"
                  alt=""
                  src="/iconlyboldcategory@2x.png"
                />
                <div className="sidebar_text">Dashboard</div>
       </Link>

      

       <Link
        to={`/upload`} 
        onClick={() => handleClick(`/upload` )}  className="sidebar_link">
           
            <img
                      className="sidebar_icon"
                      loading="eager"
                      alt=""
                      src="/chart@2x.png"
                    />
                <div id="upload_text" className="sidebar_text" >Upload</div>
       </Link>

       <Link
        to={`/invoice`} 
        onClick={() => handleClick(`/invoice` )} className="sidebar_link"  >
           
            <img
                    className="sidebar_icon"
                    loading="eager"
                    alt=""
                    src="/iconlyboldticket@2x.png"
                  />
                <div className="sidebar_text">Invoice</div>
       </Link> 
       
       <Link
        to={`/schedule`} 
        onClick={() => handleClick(`/schedule` )} className="sidebar_link" >
          
            <img
                  className="sidebar_icon"
                  loading="eager"
                  alt=""
                  src="/iconlybolddocument@2x.png"
                />
                <div className="sidebar_text">Schedule</div>
       </Link> 
       
       <Link
        to={`/calendar`} 
        onClick={() => handleClick(`/calendar` )} className="sidebar_link" >
           
            <img
                  className="sidebar_icon"
                  loading="eager"
                  alt=""
                  src="/calendar@2x.png"
                />
                <div className="sidebar_text">Calendar</div>
       </Link>
       
        <Link
        to={`/notification`} 
        onClick={() => handleClick(`/notification` )} className="sidebar_link" >
           
            <img
                  className="sidebar_icon"
                  loading="eager"
                  alt=""
                  src="/iconlyboldnotification@2x.png"
                />
                <div className="sidebar_text">Notification</div>
       </Link>

       <Link
        to={`/setting`} 
        onClick={() => handleClick(`/setting` )} className="sidebar_link" >
           
            <img
                  className="sidebar_icon"
                  loading="eager"
                  alt=""
                  src="/iconlyboldsetting@2x.png"
                />
                <div className="sidebar_text">Setting</div>
       </Link>

       </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar