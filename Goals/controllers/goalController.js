const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

const getGoals = asyncHandler(async (req, res) => {
    const goals =  await Goal.find()
    res.status(200).json(goals)
})

const setGoal = asyncHandler(async(req, res) =>{
    if(!req.body.name && !req.body.text && !req.body.completetd){
        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = await Goal.create({
        name: req.body.name,
        text: req.body.text,
        completed: req.body.completed
    })
    res.status(201).json(goal)
})

const updateGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

const deleteGoal = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    await Goal.findByIdAndDelete()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}
