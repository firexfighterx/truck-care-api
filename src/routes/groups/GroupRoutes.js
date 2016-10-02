import express from 'express';
import GroupsController from './GroupsController';
const router = express.Router();

router.get('/group/active', GroupsController.getActiveTruckCareGroup);
router.put('/group/member/:id/activate', GroupsController.addActiveTruckCareGroupMember);
router.put('/group/member/:id/deactivate', GroupsController.removeActiveTruckCareGroupMember);
export default router;
