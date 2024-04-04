import React from 'react'
import './popUp.css'

const PopUp = (props) => {
  return (props.trigger) ? (
    <div className="popUp__container">
        <div className="popUp__inner">
          <div className="popUp__inner-text">
            <button className='popUp-close-btn' onClick={() => props.setTrigger(false)}>close</button>
            <h2>About This Webapp</h2>
            <p>This webapp was created to display the data from a road traffic accidents dataset made available by Leeds City Council. <br /> <b>The dataset is available <a href='https://www.data.gov.uk/dataset/6efe5505-941f-45bf-b576-4c1e09b579a1/road-traffic-accidents'>here</a>.</b></p>
            <p>This simple webapp was created to practice development using ReactJS libraries including:</p>
            <ul>
              <li>React-Table to display CSV data in a table format</li>
              <li>React-Leaflet to display points from the CSV rows' grid reference values as markers on a map</li>
              <li>OsGridRef from geodesy to convert grid reference to latitude & longitude coordinates</li>
            </ul>
            <h2>Features of the webapp</h2>
            <ul>
              <li>Rows in the table can be selected with the according checkbox to have the datapoint displayed on the map</li>
              <li>A summary of the datapoint can be viewed by clicking on displayed map markers</li>
              <li>Columns of the table's sort order can be cycled by clicking the column header</li>
              <li>Specific field data can be searched using the global filter at the bottom of the table</li>
            </ul>
            <div className="popUp-github">
              <a href='https://github.com/willkewell/road-accident-analysis-webapp'><b>View project on GitHub</b></a>
            </div>
          </div>
        </div>
    </div>
  ) : "";
}

export default PopUp