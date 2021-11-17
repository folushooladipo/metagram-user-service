import {JwtPayload, VerifyErrors, verify as verifyJwt} from "jsonwebtoken"
import {NextFunction, Request, Response} from "express"

import {config} from "../config/config"

export interface RequestWithTokenPayload extends Request {
  tokenPayload?: JwtPayload
}

export const requireAuth = (
  req: RequestWithTokenPayload,
  res: Response,
  next: NextFunction
): Response => {
  if (!req.headers || !req.headers.authorization) {
    return res.status(400).json({error: "No authorization headers were supplied."})
  }

  const tokenParts = req.headers.authorization.split(" ")
  if (tokenParts.length !== 2) {
    return res.status(400).json({error: "Malformed token."})
  }

  const token = tokenParts[1]

  verifyJwt(token, config.jwtSecret, (err: VerifyErrors | null, decoded: JwtPayload) => {
    if (err) {
      return res.status(500).json({auth: false, error: "Failed to authenticate."})
    }

    req.tokenPayload = decoded
    return next()
  })
}
