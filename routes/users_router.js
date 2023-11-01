const router = require("express").Router();


// auth middlewares
const auth_manager = require('../middlewares/auth_manager');


// functions from managers controllers
const {
    loginManager,
    logoutManager,
    authManager,
    addManagerForAdmins,
    getAll,
    updateById,
    deleteById
} = require('../controllers/managers_controller');


// function from users controller
const {
    getAllCustomersForManager,
    getCustomerByIdForManager,
    deleteUserByIdForManager,
    updateUserByIdForManager,
    addUserForManager,
    add,
    login,
    logout
    
} = require('../controllers/users_controller');


// admins request
router.post('/admins/add-manager', addManagerForAdmins);


// managers requests
router.post('/managers/login', loginManager);
router.post('/managers/logout', logoutManager);
router.get('/managers/auth',auth_manager,authManager);
router.get('/managers/get-all',getAll);
router.post('/add-managers', addManagerForAdmins);
router.get('/customers-for-managers', getAllCustomersForManager);
router.get('/customer-by-id-for-manager/:user_id', getCustomerByIdForManager);
router.delete('/delete-user-for-managers/:user_id', deleteUserByIdForManager);
router.delete('/delete-managers/:manager_id',deleteById);
router.put('/update-managers/:manager_id', updateById);
router.put('/update-user-for-managers/:user_id', updateUserByIdForManager);

// costumers requests

router.post('/addCustomer',add)
router.post('/login',login)
router.post('/loguot',logout)




module.exports = router;
