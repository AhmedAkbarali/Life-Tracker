const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Project = mongoose.model('projects');

module.exports = (app) => {
    //Get List of Projects
    app.get('/api/projects', requireLogin, async (req, res) => {
        const projects = await Project.find({ _user: req.user.id });
        res.send(projects);
    });

    //List Projects
    app.get('/api/projects', requireLogin, async (req, res) => {
        const projects = await Project.find({
        });
        res.send(projects);
    });

    //Return single project
    app.get(`/api/projects/:id`, requireLogin, async (req, res) => {
        const project = await Project.findById(req.params.id);
        res.send(project);
    });

    //Delete project
    app.delete(`/api/projects/:id`, requireLogin, async (req, res) => {
         Project.findByIdAndDelete(req.params.id);
        res.json('Project Deleted');
    });

    //New Project
    app.post('/api/projects', requireLogin, async (req, res) => {
        const { title } = req.body;

        const project = new Project({
           name: title,
           taskLists: [],
           _user: req.user.id
        });

        try {
            await project.save();
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(err);
        }
    });
    //Delete Project

    //Within Project Operations
    //CRUD TaskList
    //CRUD Task
    //CRUD Checklist
    //CRUD TaskChecklistItem

};