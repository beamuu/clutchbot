import { Router } from "express"
const apiRouter = Router()

// please bind all route under `/api` here
apiRouter.get("/", async (req, res) => res.send("Hello Api"))


//

export default apiRouter