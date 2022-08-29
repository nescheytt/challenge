import express from 'express'

// express router
const router = express.Router()

// modules
const resultSearch = require("../modules/result-search")
const productDetail = require("../modules/product-detail")

// gets
router.get("/api/items", resultSearch)
router.get("/api/items/:id", productDetail)

module.exports = router
