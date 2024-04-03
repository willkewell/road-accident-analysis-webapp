import React from 'react'
import OsGridRef, { LatLon } from 'geodesy/osgridref'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import marker from '../../assets/marker.png'
import './map.css'


export const Map = ({rows}) => {

  const markerIcon = new Icon({
    iconUrl: marker,
    iconSize: [38, 38]
  })


  //Format data for markers
  
  const markers = rows.map(row => {
    const easting = row.values.GridRefEasting
    const northing = row.original.GridRefNorthing
    const gridRef = new OsGridRef(easting, northing)
    const [lat, lon] = gridRef.toLatLon().toString('n').split(',')
    return {
      // lat: parseFloat(0),
      // lon: parseFloat(0),
      lat: lat,
      lon: lon,
      // lat: parseFloat(row.values.Coords.toString('n').split(',')[0]),
      // popUp: `Date: ${row.values.AccidentDate} \n`
      popUpRef: row.values.ReferenceNumber,
      popUpDate: row.values.AccidentDate,
      popUpHour: row.values.Time24hr.slice(0,2),
      popUpMin: row.values.Time24hr.slice(2),
      popUpRoad: row.values["1stRoadClass&No"]
    }
  })

  //Render map and marker for selected data points
  return (
    <div className='map__container'>
        <MapContainer center={[53.801277, -1.548567]} zoom={10}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          {markers.map(marker => (
            <Marker position={[marker.lat, marker.lon]} icon={markerIcon}>
              <Popup>
                <ul>
                  <li><b>Road: {marker.popUpRoad}</b></li>
                  <li><b>Reference: {marker.popUpRef}</b></li>
                  <li>Date: {marker.popUpDate}</li>
                  <li>Time: {marker.popUpHour}:{marker.popUpMin}</li>
                </ul>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
    </div>
  )
}

export default Map
