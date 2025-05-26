const { Router } = require("express");
const {sendofferMessage,bulkwhatsappMessage} = require("../controllers/SendOffersController");

const router=Router();

router.post('/whatsapp/offers',sendofferMessage);
router.post('/whatsapp/bulk',bulkwhatsappMessage)

module.exports=router;