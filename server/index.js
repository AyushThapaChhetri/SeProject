const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const EmployeeModel = require("./model/Employee");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB', error));

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await EmployeeModel.findOne({ email: email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.json({ status: "success", token: token });
            } else {
                res.json({ status: "error", message: "Invalid password" });
            }
        } else {
            res.json({ status: "error", message: "User not found" });
        }
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newEmployee = new EmployeeModel({
            ...req.body,
            password: hashedPassword
        });
        const savedEmployee = await newEmployee.save();
        res.json(savedEmployee);
    } catch (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
});

app.get("/verify", (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.json({ status: "error", message: "No token provided" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({ status: "error", message: "Invalid token" });
        }
        EmployeeModel.findById(decoded.id)
            .then(user => {
                if (user) {
                    res.json({ status: "success", name: user.name });
                } else {
                    res.json({ status: "error", message: "User not found" });
                }
            })
            .catch(err => res.status(500).json({ status: "error", message: err.message }));
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});