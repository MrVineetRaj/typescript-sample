import type { Request, Response } from "express";

export class Controller {
  public handleHealthCheck(req: Request, res: Response): void {
    res.json({
      status: "healthy",
    });
    return;
  }
}
