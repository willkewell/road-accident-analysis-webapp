import React, { useState } from 'react'
import Table from '../table/Table'
import Map from '../map/Map'
import PopUp from '../popUp/PopUp'
import './page.css'

export const Page = () => {

    const [selectedRows, setSelectedRows] = React.useState([]);
    const [popUp, setPopUp] = useState(false);
    
    return (
        <div>
            <PopUp trigger={popUp} setTrigger={setPopUp}/>
            <div className='container page__container'>
                <button className='info-button' onClick={() => setPopUp(true)}>ⓘ info</button>
                <Map rows={selectedRows}/>
                <Table onRowSelect={rows => setSelectedRows(rows)}/>
            </div>
        </div>
        
    )
}

export default Page