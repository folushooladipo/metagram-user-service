import {Router} from "express"

import {AuthRouter, requireAuth} from "./auth.router"
import {User} from "../models/User"

const router: Router = Router()

router.use("/auth", AuthRouter)

router.get("/:id", requireAuth, async (req, res) => {
  const {id} = req.params
  const user = await User.findByPk(id)
  // TODO: handle when id is defined but it is non-numeric.
  // @TODO: handle when id is not defined and when user === null.
  res.send(user)
})

router.get("/", (req, res) => {
  res
    .status(404)
    .json({error: "Not implemented."})
})

export const UserRouter: Router = router
