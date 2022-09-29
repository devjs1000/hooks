const mongoose = require("mongoose");
// const AutoIncrementPlugin = require("mongoose-sequence");
const ID = mongoose.Types.ObjectId;
const { Schema } = mongoose;
const required = true;
const trim = true;
const unique = true;
const index = true;
const timestamps = true;
const { model } = mongoose;
// const AutoIncrement = AutoIncrementPlugin(mongoose);

const $$safe = (ref) => {
  return {
    _id: {
      type: ID,
      ref,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  };
};

const $object = {
  type: Object,
  required,
};

const $date = {
  required,
  type: Date,
  default: Date.now(),
};

const $number = {
  required: true,
  type: Number,
};

const $string = {
  required: true,
  type: String,
};

const $false = {
  required,
  type: Boolean,
  default: false,
};

const $true = {
  required,
  type: Boolean,
  default: true,
};

const $$enum = (tenum, tdefault) => {
  return {
    required,
    type: String,
    enum: tenum,
    default: tdefault,
  };
};

const $$ref = (ref, extra = {}) => {
  return {
    type: ID,
    ref,
    required,
    ...extra,
  };
};

const $$safeArray = (ref) => [$$safe(ref)];

module.exports = {
  $$safe,
  $date,
  $number,
  $string,
  $object,
  $false,
  $true,
  $$enum,
  $$ref,
  $$safeArray,
  Schema,
  model,
  trim,
  unique,
  index,
  timestamps,
  required,
  ID,
};
