import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "course", label: "Name", minWidth: 170 },
  { id: "code", label: "Code", minWidth: 100 },
  {
    id: "credit",
    label: "Credit",
    minWidth: 170,
    align: "center",
  },
  {
    id: "sections",
    label: "No. of Sections",
    align: "center",
  },
  {
    id: "lecturers",
    label: "No. of Lecturers",
    minWidth: 170,
    align: "center",
  },
];

const rows = [
  {
    course: "Introduction to Programming",
    code: "CS101",
    credit: 3,
    date: "2024-01-10",
    sections: 5,
    lecturers: 3,
  },
  {
    course: "Data Structures",
    code: "CS102",
    credit: 4,
    date: "2024-01-12",
    sections: 4,
    lecturers: 4,
  },
  {
    course: "Algorithms",
    code: "CS201",
    credit: 4,
    date: "2024-01-15",
    sections: 3,
    lecturers: 2,
  },
  {
    course: "Operating Systems",
    code: "CS202",
    credit: 3,
    date: "2024-01-17",
    sections: 4,
    lecturers: 2,
  },
  {
    course: "Computer Networks",
    code: "CS203",
    credit: 3,
    date: "2024-01-20",
    sections: 3,
    lecturers: 2,
  },
  {
    course: "Database Systems",
    code: "CS204",
    credit: 3,
    date: "2024-01-22",
    sections: 5,
    lecturers: 3,
  },
  {
    course: "Software Engineering",
    code: "CS301",
    credit: 3,
    date: "2024-01-25",
    sections: 2,
    lecturers: 2,
  },
  {
    course: "Artificial Intelligence",
    code: "CS302",
    credit: 4,
    date: "2024-01-27",
    sections: 3,
    lecturers: 2,
  },
  {
    course: "Machine Learning",
    code: "CS303",
    credit: 4,
    date: "2024-01-30",
    sections: 3,
    lecturers: 2,
  },
  {
    course: "Computer Graphics",
    code: "CS304",
    credit: 3,
    date: "2024-02-02",
    sections: 2,
    lecturers: 1,
  },
  {
    course: "Cyber Security",
    code: "CS305",
    credit: 3,
    date: "2024-02-05",
    sections: 2,
    lecturers: 1,
  },
  {
    course: "Human-Computer Interaction",
    code: "CS306",
    credit: 3,
    date: "2024-02-07",
    sections: 2,
    lecturers: 1,
  },
  {
    course: "Distributed Systems",
    code: "CS401",
    credit: 4,
    date: "2024-02-10",
    sections: 1,
    lecturers: 1,
  },
  {
    course: "Quantum Computing",
    code: "CS402",
    credit: 4,
    date: "2024-02-12",
    sections: 1,
    lecturers: 1,
  },
  {
    course: "Capstone Project",
    code: "CS403",
    credit: 6,
    date: "2024-02-15",
    sections: 1,
    lecturers: 2,
  },
];

export default function Schedule() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
