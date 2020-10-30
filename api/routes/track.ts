import express from 'express'
import * as trackController from '../controllers/track'

const router = express.Router()

router.post('/track-data', trackController.trackData)

export default router
