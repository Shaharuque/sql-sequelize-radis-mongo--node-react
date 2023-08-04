const Router = require('koa-router');
const { getMessages, postMessage } = require('../controllers/messageController');
// const router = new Router(); //localhost:3000/messages (without base url)

//extra work if i want to add the base url (localhost:3000/base/url/messages)
const router = new Router({
    prefix: '/base/url', // Set the base URL prefix
});
  
router.get('/messages', getMessages);
router.post('/messages',postMessage );

module.exports = router;