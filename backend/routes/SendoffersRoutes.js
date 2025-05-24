const { Router } = require("express");
const {sendofferMessage,bulkwatsappMessage} = require("../controllers/SendOffersController");

const router=Router();

router.post('/watsapp/offers',sendofferMessage);
router.post('/watsapp/bulk',bulkwatsappMessage)

module.exports=router;