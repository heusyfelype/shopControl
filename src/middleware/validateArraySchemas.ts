
import { ArraySchema } from "joi";
import { NextFunction, Request, Response } from "express";

export function validateArraySchemas(schema: ArraySchema ) {
  function isValidSchema(req: Request, res: Response, next: NextFunction) {
    
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw { type: "joi", message: error.details.map(detail => detail.message) };
    }
    next();
  };

  return isValidSchema;
}