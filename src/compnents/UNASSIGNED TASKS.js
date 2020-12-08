import React from 'react';
import {data} from './data';

import MUIDataTable from "mui-datatables";
import Pagination from '@material-ui/lab/Pagination';

const UNASSIGNEDTASKS = () => {
    const columns = [
        {
         name: "taskname",
         label: "Task Name",
         options: {
          filter: true,
          filterType:"Dropdown",
          sort: true,
         }
        },
        {
         name: "company",
         label: "LOB",
         options: {
          filter: true,
          filterType:"Dropdown",
          sort: true,
         }
        },
        {
         name: "city",
         label: "Subtasks",
         options: {
          filter: true,
          filterType:"Dropdown",
          sort: true,
         }
        },
        {
         name: "assigned",
         label: "ASSIGNED TO",
         options: {
          filter: true,
          filterType:"Dropdown",
          sort: true,
         }
        },
  
        {
        name: "step",
        label: "Step",
        options: {
        filter: true,
        filterType:"Dropdown",
        sort: true,
        }
        },

        {
            name: "DueDate",
            label: "Due Date",
            options: {
            filter: true,
            filterType:"Dropdown",
            sort: true,
            }
            },

       ];

       const options = {
        filterType: 'checkbox',
      };
    return (
        <>
        <div className="title">
          {/* <span><h1>hello</h1></span>   */}
          {/* <input type="search" placeholder="clear all filters " /> */}
        <Pagination count={1} color="primary" />
        </div>
        <MUIDataTable

        title={"Employee List"}
        data={data}
        filterType="Dropdown"
        columns={columns}
        options={options}
      />
      </>
    )
}




export default UNASSIGNEDTASKS
