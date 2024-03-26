import express from 'express';
import {
    getPreAuth,
    getPreAuthByID,
    addPreAuth
} from '../controllers/preAuthControllers.js';

const router = express.Router();

router.get('/', getPreAuth)
router.get('/:id', getPreAuthByID)
router.post('/', addPreAuth)

export default router