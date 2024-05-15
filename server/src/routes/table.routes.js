import Router from 'express';
import { addEntry,deleteEntry,updateEntry,getAllEntry } from '../controllers/table.controller.js';

const router=Router();

router.get('/entries',getAllEntry);
router.post('/add',addEntry);
router.post('/delete',deleteEntry);
router.post('/update',updateEntry);

export default router;
