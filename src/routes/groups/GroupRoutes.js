import express from 'express';
import GroupsController from './GroupsController';
const router = express.Router();

router.get('/group/active', GroupsController.getActiveTruckCareGroup);
router.put('/group/member/:id/activate', GroupsController.addUserActiveStatus);
router.put('/group/member/:id/deactivate', GroupsController.removeUserActiveStatus);
export default router;
