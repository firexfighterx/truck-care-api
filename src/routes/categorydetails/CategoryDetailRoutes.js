import express from 'express';
import CategoryDetailsController from './CategoryDetailsController';
const router = express.Router();

router.get('/truck/:truckNumber/category/details', CategoryDetailsController.getCategoryDetails);
export default router;
