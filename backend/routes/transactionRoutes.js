import  express from 'express';
import { addTransaction, getAllTransaction, editTransaction, deleteTransaction } from '../controllers/transactionController.js';

// Router object 
const router = express.Router();

// Routers
// Add Transaction POST method
router.post('/add-transaction', addTransaction);

// Edit Transaction POST method
router.post('/edit-transaction', editTransaction);

// Delete Transaction POST method
router.post('/delete-transaction', deleteTransaction);

// Get Tranactions GET method
router.post('/get-transaction', getAllTransaction);


export default router;