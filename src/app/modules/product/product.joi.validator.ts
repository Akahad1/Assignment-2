import Joi from "joi";

// Variant schema
const variantSchema = Joi.object({
  type: Joi.string().required(),
  value: Joi.string().required(),
});

// Inventory schema
const inventorySchema = Joi.object({
  quantity: Joi.number().required().messages({
    "number.base": "Quantity must be a number",
    "any.required": "Quantity is required",
  }),
  inStock: Joi.boolean().optional(),
});

// Product schema
const productValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Name is required",
  }),
  description: Joi.string().required().messages({
    "string.empty": "Description is required",
  }),
  price: Joi.number().required().messages({
    "number.base": "Price must be a number",
    "any.required": "Price is required",
  }),
  category: Joi.string().required().messages({
    "string.empty": "Category is required",
  }),
  tags: Joi.array().items(Joi.string()).optional(),
  variants: Joi.array().items(variantSchema).optional(),
  inventory: inventorySchema.required(),
});

export default productValidationSchema;
