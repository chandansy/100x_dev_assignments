const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://chandansy1905:1HOQci7syBDnbuQE@cluster0.lis429b.mongodb.net/course_selling');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    puchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}