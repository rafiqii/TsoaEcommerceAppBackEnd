import express, {Request, Response, NextFunction} from "express";
// import { IGetUserAuthInfoRequest } from "../fixigTS/definitionfile"
// import { IUserInfo } from "../fixigTS/definitionfile"

export function isPremuim(req:Request, res:Response , next:NextFunction){
    if(req.user.isPremium)
    return(res.status(401).send("Please become a premuim member to access this"))
    else
    next();
}