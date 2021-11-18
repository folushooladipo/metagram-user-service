import {Router} from "express"

import {RequestWithTokenPayload, requireAuth} from "../../../../middleware"
import {AuthRouter} from "./auth.router"
import {User} from "../models/User"

const router: Router = Router()

router.use("/auth", AuthRouter)

router.get("/:id?", requireAuth, async (req: RequestWithTokenPayload, res) => {
  const {id} = req.params
  if (!id) {
    res
      .status(400)
      .json({
        error: "You need to supply a user ID.",
      })
    return
  }
  if (Number.isNaN(Number(id))) {
    res
      .status(400)
      .json({
        error: "You must supply a numeric value as the user ID.",
      })
    return
  }

  const user = await User.findByPk(id)
  if (!user) {
    res
      .status(404)
      .json({
        error: "User not found.",
      })
    return
  }

  res.json(user)
})

router.get("/", (req, res) => {
  res
    .status(404)
    .json({error: "Not implemented."})
})

export const UserRouter: Router = router
