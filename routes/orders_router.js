const router = require("express").Router();
const auth_manager = require('../middlewares/auth_manager');


// managers functions

const {
    getAllOrdersForManagers,
    updateStatusForManagers,
    getOrderByIdForManagers,
    deleteOrderByIdForManagers

} = require('../controllers/orders_controller');

// __________________

// guests functions

const {
    addNewOrderForGuest,
} = require('../controllers/orders_controller');

//_________________



// managers requests

router.get('/managers/all', getAllOrdersForManagers),
router.put('/managers/update-status/:id',updateStatusForManagers),
router.get('/managers/order-details/:id',getOrderByIdForManagers),
router.delete('/managers/delete-order/:id',deleteOrderByIdForManagers),

//__________________



// guests requests

router.post('/add', addNewOrderForGuest)

//_________________


module.exports = router;
