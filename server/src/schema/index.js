import Joi from '@hapi/joi';

const mainSchema = Joi.object({
  question: Joi.string().trim().required(),
  answer: Joi.string().trim().required(),
  video_url: Joi.string().uri()
});

const updateSchema = Joi.object({
  question: Joi.string().trim(),
  answer: Joi.string().trim(),
  video_url: Joi.string().uri()
});

export default {
  mainSchema,
  updateSchema
};
