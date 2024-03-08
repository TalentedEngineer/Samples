/* learn more: https://github.com/testing-library/jest-dom // @testing-library/jest-dom library provides a set of custom jest matchers that you can use to extend jest. These will make your tests more declarative, clear to read and to maintain.*/

const router = require('express').Router();
const auth = require('../../middleware/auth.middleware');
const Role = require('../../utils/userRoles.utils');
const awaitHandlerFactory = require('../../middleware/awaitHandlerFactory.middleware');
const IEOController = require("../../controllers/ieo.controller.js")

router.post('/create', auth(Role.Super), awaitHandlerFactory(IEOController.createIEO));
router.patch('/id/:id', auth(Role.Super), awaitHandlerFactory(IEOController.updateIEO));
router.delete('/id/:id', auth(Role.Super), awaitHandlerFactory(IEOController.deleteIEO));
router.get('/', awaitHandlerFactory(IEOController.getAllIEO));
router.get('/id/:id', awaitHandlerFactory(IEOController.getOneIEO));

module.exports = router