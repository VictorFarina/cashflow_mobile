const VALID_REQUIRED = (value) => value.trim().length > 0;

const VALID_NUMERIC = (value) => !isNaN(value) && value.trim() !== "";

const VALID_MIN = (min_equal, value) =>
  VALID_NUMERIC(value) && parseFloat(value) >= parseFloat(min_equal);

const VALID_MAX = (max, value) =>
  VALID_NUMERIC(value) && parseFloat(value) <= parseFloat(max);

const Validations = {
  VALID_REQUIRED,
  VALID_NUMERIC,
  VALID_MIN,
  VALID_MAX,
};

export default Validations;
