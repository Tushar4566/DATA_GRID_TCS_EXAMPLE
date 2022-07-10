import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomPagination from './TablePagination';
import {rowsForTable} from './DataGridMockData';


const columnSchema: GridColDef[] = [
  {
    field: "businessNameColumn",
    headerName: "Business Name",
    width: 200,
    editable: true,
  },
  {
    field: "fcaRefIDColumn",
    headerName: "FCA Ref ID",
    type: "number",
    width: 200,
    editable: false,
  },
  {
    field: "legalEntityNameColumn",
    headerName: "Legal Entity Name",
    width: 300,
    editable: true,
  },
  {
    field: "phoenixIDColumn",
    headerName: "Phoenix ID",
    width: 300,
    editable: false,
  },
];

export default function DataGridPilot() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rowsForTable}
        columns={columnSchema}
        pageSize={5}
        rowsPerPageOptions={[3]}
        checkboxSelection
        disableSelectionOnClick={true}
        components={{
          Pagination: CustomPagination,
        }}
      />
    </Box>
  );
}
