import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import pallette from "../pallette";

const courses = [
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

const RegisterSubject = () => {
  const [subjectCode, setSubjectCode] = useState("");
  const [section, setSection] = useState("");

  const handleSubjectCodeChange = (event) => {
    setSubjectCode(event.target.value);
    setSection(""); // Reset section when subject code changes
  };

  const handleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(
      `Registered for subject code: ${subjectCode}, section: ${section}`
    );
  };

  const selectedCourse = courses.find((course) => course.code === subjectCode);

  return (
    <Card sx={{ width: "450px" }}>
      <CardContent>
        <Box sx={{ minWidth: 120, maxWidth: 300, mx: "auto", mt: 5 }}>
          <Typography color={pallette().utmMaroon}>Register Course</Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel id="subject-code-label">Subject Code</InputLabel>
            <Select
              labelId="subject-code-label"
              value={subjectCode}
              onChange={handleSubjectCodeChange}
              label="Subject Code"
            >
              {courses.map((course) => (
                <MenuItem key={course.code} value={course.code}>
                  {course.code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!subjectCode}>
            <InputLabel id="section-label">Section</InputLabel>
            <Select
              labelId="section-label"
              value={section}
              onChange={handleSectionChange}
              label="Section"
            >
              {selectedCourse &&
                Array.from({ length: selectedCourse.sections }, (_, index) => (
                  <MenuItem key={index + 1} value={index + 1}>
                    Section {index + 1}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Button
            variant="contained"
            sx={{ background: pallette().utmMaroon }}
            fullWidth
            onClick={handleSubmit}
            disabled={!subjectCode || !section}
          >
            Register
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RegisterSubject;
