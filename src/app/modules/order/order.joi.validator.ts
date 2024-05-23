import Joi from "joi";

// Order schema
const orderValidatorSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "string.empty": "Email is required",
  }),
  productId: Joi.string().required().messages({
    "string.empty": "Product ID is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
  }),
  quantity: Joi.number().optional().messages({
    "number.base": "Quantity must be a number",
  }),
});

export default orderValidatorSchema;
