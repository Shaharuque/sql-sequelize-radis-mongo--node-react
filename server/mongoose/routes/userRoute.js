const Router=require('koa-router');
const { userCreate, getUsers, deleteUser,updateUser } = require('../controllers/userController');

const router=new Router();

router.get('/users', getUsers);         //localhost:3000/users
router.post('/user',userCreate);  //localhost:3000/user
router.post('/delete',deleteUser)
router.post('/update/:id',updateUser) //localhost:3000/update/64cd3d853652d420a8f6633e


module.exports = router;