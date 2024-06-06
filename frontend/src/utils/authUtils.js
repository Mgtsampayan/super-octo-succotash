export const isCollegeStudent = (studentcode) => {
    return studentcode.includes('C');
};

export const isSHSStudent = (studentcode) => {
    return studentcode.includes('S');
};

export const getStudentLevel = (studentcode) => {
    if (isCollegeStudent(studentcode)) {
        return 'College';
    }
    if (isSHSStudent(studentcode)) {
        return 'Senior High School';
    }
    return 'Unknown';
};
