"use client";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
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
import React from "react";
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
                  disabled={context.isLoading.list}
                >
                  {context.isLoading.list ? (
                    <CircularProgress size="2em" color="inherit" />
                  ) : (
                    "Refresh"
                  )}
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
                                      gap: "0.5em",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {props.allowEdit && (
                                      <>
                                        {context.isLoading.read &&
                                        context.focused?.id === row.id ? (
                                          <CircularProgress
                                            size="1em"
                                            color="inherit"
                                          />
                                        ) : (
                                          <EditIcon
                                            color="disabled"
                                            fontSize="small"
                                          />
                                        )}
                                      </>
                                    )}

                                    {props.allowDelete && (
                                      <>
                                        {context.isLoading.delete &&
                                        context.focused?.id === row.id ? (
                                          <CircularProgress
                                            size="1em"
                                            color="inherit"
                                          />
                                        ) : (
                                          <DeleteIcon
                                            color="disabled"
                                            fontSize="small"
                                          />
                                        )}
                                      </>
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
