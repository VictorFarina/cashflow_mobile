export default function VALIDATION_MESSAGES(fieldName, value = "") {
  return {
    required: `The ${fieldName} is required`,
    numeric: `The ${fieldName} should be numeric`,
    min: `The ${fieldName} min value must be ${value}`,
    max: `The ${fieldName} max value must be ${value}`,
  };
}
