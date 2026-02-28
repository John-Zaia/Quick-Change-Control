import { Request, Response } from "express";
import { testQuery } from "../model/testDBQuery";

export async function testQueryHandler(req: Request, res: Response) {
    const { test } = req.body;

    const testRequest = await testQuery(test);

    res.status(201).json(testRequest)
}