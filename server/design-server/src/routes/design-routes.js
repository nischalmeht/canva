const express = require("express");
const router = express.Router();
const designController=require("../controller/design-controller");
const authenticatedRequest = require("../middleware/auth-middleware");
router.use(authenticatedRequest);
router.get("/",designController.getUserDesigns);
router.get("/:id",designController.getUserDesignsByID);
router.post("/",designController.saveDesigns);
router.delete("/:id",designController.deleteDesign);

module.exports = router;