const asyncHandler = require('express-async-handler')

const ToDoModel = require("../models/todo");
const router = require('../routes/todoRoutes');

// @desc Post To-do
// @route POST /api/to-do
// @access Private
const postToDo = asyncHandler(async (req, res) => {

    const { todo } = req.body;
    const newtoDo = ToDoModel({ todo })
    if (todo == "") {
        res.redirect('/api/to-do')
    }

    //save the todo


    newtoDo.save()
        .then(() => {
            console.log("Successfully added TO-DO")
            res.redirect("/api/to-do")
        })

        .catch((err) => console.log(err))
})


// @desc Delete To-do
// @route POST /api/to-do
// @access Private
const deleteToDo = asyncHandler(async (req, res) => {
    const { _id } = req.params;
    const deleteOnetodo = ToDoModel.findById({ _id })
    deleteOnetodo.remove()

        .then(() => {
            console.log("Deleted To-Do Successfully")
            res.redirect("/api/to-do")
        })
        .catch((err) => {
            console.log(err)
        })
})

// @desc Get All ToDos
// @route GET /api/to-do
// @access Private
const getToDo = asyncHandler(async (req, res) => {
    const allToDo = await ToDoModel.find()

    res.render("index", { todo: allToDo })


})


module.exports = { postToDo, getToDo, deleteToDo }
