import React from "react";
import { useEffect , useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardProfile from "../components/DashboardProfile";
import DashboardSideBar from "../components/DashboardSideBar";
export default function Dashboard() {
  const location = useLocation()
  const [tab, setTab] = useState('')
  useEffect( () => {
    const searchParams = new URLSearchParams(location.search)
    const tabFromURL = searchParams.get('tab')
    if(tabFromURL) setTab(tabFromURL)
    
  }, [location.search])
  console.log(tab);
  
  
  return <div className="flex flex-row">
    <div>
    <DashboardSideBar setTab={setTab}/>
    </div>
    <div className="w-full">
      {tab === 'profile' && <DashboardProfile /> }
    </div>
  </div>;
}
