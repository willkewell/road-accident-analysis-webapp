import moment from 'moment'
import OsGridRef, { LatLon } from 'geodesy/osgridref'

//Define columns for parsing csv data
export const COLUMNS = [
    {
        Header: 'Reference',
        accessor: 'ReferenceNumber'
    },
    {
        Header: 'Accident Date',
        accessor: 'AccidentDate',
    },
    {
        Header: 'Time (24hr)',
        accessor: 'Time24hr',
        Cell: ({ cell }) => {
            const hour = cell.value.slice(0,2);
            const min = cell.value.slice(2);
            return (
                <>{hour}:{min}</>
            )
        }
    },
    {
        Header: 'Vehicles',
        accessor: 'NumberofVehicles'
    },
    // {
    //     Header: 'Road Class',
    //     accessor: '1stRoadClass'
    // },
    {
        Header: 'Road',
        accessor: '1stRoadClass&No'
    },
    {
        Header: 'Grid Ref (Easting)',
        accessor: 'GridRefEasting',
    },
    {
        Header: 'Grid Ref (Northing)',
        accessor: 'GridRefNorthing',
    },
    {
        Header: 'Coordinates',
        accessor: 'coordinates',
        Cell: ( props ) => {
            const easting = props.row.original.GridRefEasting
            const northing = props.row.original.GridRefNorthing
            const gridRef = new OsGridRef(easting, northing)
            const [lat, lon] = gridRef.toLatLon().toString('n').split(',')
            return (
                <>{lat},{lon}</>
            )
        }
    },
]