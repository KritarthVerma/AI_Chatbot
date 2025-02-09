import { body, validationResult } from "express-validator";
/**
 * Middleware to validate incoming request data using Express Validator.
 * @param validations - Array of validation rules to be applied.
 * @returns An Express middleware function that runs the validations.
 */
export const validate = (validations) => {
    return async (req, res, next) => {
        // Iterate through each validation rule and execute it
        for (let validation of validations) {
            const result = await validation.run(req);
            // If there is an error in validation, stop further execution
            if (!result.isEmpty()) {
                break;
            }
        }
        // Collect all validation errors from the request
        const errors = validationResult(req);
        console.log(errors.array());
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const loginValidator = [
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password should contain atleast 6 characters")
];
export const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator
];
//# sourceMappingURL=validators.js.map