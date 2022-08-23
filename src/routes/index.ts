import { Router } from "express";
const router = Router()

// router.use('new routes')
router.get('/', (req, res) => { res.send(`Default route`) })
export default router