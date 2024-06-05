const { getStudentById } = require('../models/Student');

const getStudentProfile = async (req, res) => {
    try {
        const student = await getStudentById(req.params.id);
        if (!student) {
            res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Serve Error' });
    }
};

module.exports = { getStudentProfile, };