import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import { useTable, useSortBy, useGlobalFilter, useRowSelect } from 'react-table'
import ACCIDENTS from '../../assets/Traffic_20accidents_2019_Leeds.csv'
import { COLUMNS } from '../columns'
import { GlobalFilter } from '../filter/GlobalFilter'
import { Checkbox } from '../checkbox/Checkbox'
import './table.css'

export const Table = ({onRowSelect}) => {
  
  const [data, setData] = useState([]);


    //Parse data from CSV*
    useEffect(() => {
        const fetchParseData = async () => {
            const response = await fetch(ACCIDENTS);
            const reader = response.body.getReader();
            const result = await reader.read();
            const decoder = new TextDecoder("utf-8");
            const csvData = decoder.decode(result.value);
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true
            }).data;
            setData(data);
        }
        fetchParseData()
    }, [])

  const { getTableProps,
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows
  } = useTable({
    columns: COLUMNS,
    data: data
  },
  useGlobalFilter,
  useSortBy,
  useRowSelect,
  (hooks) => {
    hooks.visibleColumns.push((columns) => {
      return [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          )
        },
        ...columns
      ]
    })
  }
  )

  const { globalFilter } = state


  //Pass data to parent component
  React.useEffect(() => {
    onRowSelect(selectedFlatRows);
  }, [onRowSelect, selectedFlatRows]);


  //Render table
  return (
    <div>
      <div className='table__container'>
        <>
          <table {...getTableBodyProps()}>
            <thead>
              {
                headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (column.isSortedDesc ? '⬇️' : '⬆️') : ''}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))
              }
            </thead>
            <tbody {...getTableBodyProps()}>
              {
                rows.map(row => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()} className="table-body-row">
                      {row.cells.map((cell) => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </>
      </div>
      
      {/* Global filtering rows implementation */}
      <div className='container filter__container'>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
      </div>
      
    </div>
    
  )
}

export default Table
