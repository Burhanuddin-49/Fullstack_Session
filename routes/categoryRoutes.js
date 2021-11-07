const database = require('../database/db')
const express = require('express')
const { response } = require('express')
const router = express.Router()

router.get('/all', ()=>{
    try {
        response.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        response.json({
            categories: [],
            message:error.message,
            status:"FAILED"
        })
    }
})