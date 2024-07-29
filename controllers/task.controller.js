const Task = require('../models/task.model');

exports.createTask = async (req, res) => {
    const { title, description, status, priority, userId } = req.body;

    try {
        const task = await Task.create({ title, description, status, priority, userId });
        res.status(201).send({ message: 'Task created successfully!', task });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().populate('userId', 'username email');
        res.status(200).send(tasks);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
