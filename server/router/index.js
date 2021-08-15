const Router = require('express').Router;

const router = new Router();

router.post('/registration');
router.post('/login');
router.post('/logout');

router.det('/activate/:link');
router.det('/refresh');

router.det('/users');

module.exports = router;