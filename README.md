# Road Accident Analysis Map Webapp
## About this webapp

This webapp was created to display the data from a road traffic accidents dataset made available by Leeds City Council. The dataset is available **[here](https://www.data.gov.uk/dataset/6efe5505-941f-45bf-b576-4c1e09b579a1/road-traffic-accidents)**.

This simple webapp was created to practice development using ReactJS libraries including:
- React-Table to display CSV data in a table format
- React-Leaflet to display points from the CSV rows' grid reference values as markers on a map
- OsGridRef from geodesy to convert grid reference to latitude & longitude coordinates

## Features of the webapp

- Rows in the table can be selected with the according checkbox to have the datapoint displayed on the map
- A summary of the datapoint can be viewed by clicking on displayed map markers
- Columns of the table's sort order can be cycled by clicking the column header
- Specific field data can be searched using the global filter at the bottom of the table