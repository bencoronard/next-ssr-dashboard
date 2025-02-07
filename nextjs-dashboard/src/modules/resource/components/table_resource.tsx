"use client";
import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

import { resourceContext } from "../stores/resource";
import { Observer } from "mobx-react-lite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Column {
  id:
    | "id"
    | "field1"
    | "field2"
    | "field3"
    | "tenant"
    | "createdBy"
    | "actions";
  label: string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "id", label: "ID", align: "center" },
  { id: "field1", label: "Field 1", align: "center" },
  { id: "field2", label: "Field 2", align: "center" },
  { id: "field3", label: "Field 3", align: "center" },
  { id: "tenant", label: "Tenant", align: "center" },
  { id: "createdBy", label: "Created by", align: "center" },
  { id: "actions", label: "Actions", align: "center" },
];

type ResourceTableProps = {
  allowCreate: boolean;
  allowEdit: boolean;
  allowDelete: boolean;
};

export default function ResourceTable(props: ResourceTableProps) {
  console.log("ResourceTable() was rendered here");
  const [loading, setLoading] = React.useState(false);

  const context = React.useContext(resourceContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRefresh = async () => {
    await context.listResources();
  };
  const handleReadResource = async (id: number) => {
    try {
      const resource = await context.readResource(id);
      alert(`Data: ${JSON.stringify(resource)}`);
    } catch (error) {}
  };
  const handleDeleteResource = async (id: number) => {
    try {
      const resourceId = await context.deleteResource(id);
      alert(`Resource ${resourceId} deleted`);
    } catch (error) {}
  };

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <Observer>
      {() => (
        <Stack spacing={3}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" component="h1">
              Resources
            </Typography>

            <Box sx={{ display: "flex", gap: "1em" }}>
              <FormControl>
                <Button
                  variant="outlined"
                  type="button"
                  onClick={handleRefresh}
                  loading={context.isLoading.list}
                >
                  Refresh
                </Button>
              </FormControl>

              {props.allowCreate && (
                <FormControl>
                  <Button variant="contained" type="button">
                    Create resource
                  </Button>
                </FormControl>
              )}
            </Box>
          </Box>

          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {context.resources
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.id}
                        >
                          {columns.map((column) => {
                            if (column.id === "actions") {
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {props.allowEdit && (
                                      <IconButton
                                        color="primary"
                                        loading={
                                          context.isLoading.read &&
                                          context.focusedId === row.id
                                        }
                                        onClick={() =>
                                          handleReadResource(row.id)
                                        }
                                      >
                                        <EditIcon fontSize="small" />
                                      </IconButton>
                                    )}

                                    {props.allowDelete && (
                                      <IconButton
                                        color="primary"
                                        loading={
                                          context.isLoading.delete &&
                                          context.focusedId === row.id
                                        }
                                        onClick={() =>
                                          handleDeleteResource(row.id)
                                        }
                                      >
                                        <DeleteIcon fontSize="small" />
                                      </IconButton>
                                    )}
                                  </Box>
                                </TableCell>
                              );
                            }
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={context.resources.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Stack>
      )}
    </Observer>
  );
}
