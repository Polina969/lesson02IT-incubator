import { Response, Request, NextFunction } from "express";
import { validationResult } from "express-validator";
import { FieldNamesType, OutputErrorsType } from "../types/outputErrorsType";

export const inputCheckErrorsMiddleware = (
  req: Request,
  res: Response<OutputErrorsType>,
  next: NextFunction
) => {
  const e = validationResult(req);
  if (!e.isEmpty()) {
    const eArray = e.array({ onlyFirstError: true }) as {
      path: FieldNamesType;
      msg: string;
    }[];
    // console.log(eArray)

    res.status(400).json({
      errorsMessages: eArray.map((x) => ({ field: x.path, message: x.msg })),
    });
    return;
  }

  next();
};

// import { Request, Response, NextFunction } from "express";
// import {
//   validationResult,
//   ValidationError,
//   AlternativeValidationError,
// } from "express-validator";
// import { HTTP_STATUSES } from "../utils";

// export function validateRequestSchema(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     res.status(HTTP_STATUSES.BAD_REQUEST_400).json({ errors: errors.array() }); // говорим typescript что это массив, и какого он типа.})
//     return;
//   }
//   next();
// }

// type FieldValidationError = ValidationError & {
//   param?: string;
// };

// interface ValidationErrorWithParam {
//   msg: string;
//   param?: string;
//   path?: string;
// }
// function isFieldValidationError(
//   error: ValidationError | AlternativeValidationError
// ): error is FieldValidationError {
//   return (error as FieldValidationError).param !== undefined;
// }

// export const validateRequestSchema = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     const errorsMessages = errors.array().map((error) => {
//       const typedError = error as ValidationErrorWithParam;
//       return {
//         message: typedError.msg,
//         field: isFieldValidationError(error)
//           ? typedError.param
//           : typedError.path ?? "unknown field",
//       };
//     });
//     return res.status(400).json({ errorsMessages });
//   }
//   if (req.body && Object.keys(req.body).length > 3) {
//     return res
//       .status(400)
//       .json({
//         errorsMessages: [{ message: "Too many fields", field: "body" }],
//       });
//   }
//   next();
//};
// export function validateRequestSchema(
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     res.status(HTTP_STATUSES.BAD_REQUEST_400).json({ errors: errors.array() }); // говорим typescript что это массив, и какого он типа.})
//     return;
//   }
//   next();
// }
