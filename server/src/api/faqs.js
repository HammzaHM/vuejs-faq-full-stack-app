import * as express from 'express';
import monk from 'monk';
import Schemas from '../schema';

require('dotenv').config();

const router = express.Router();

const db = monk(process.env.MONGO_URI);
const faqs = db.get('faqs');

// READ ALL
router.get('/', async (req, res, next) => {
  try {
    const items = await faqs.find({});
    res.json({ items });
  } catch (error) {
    next(error);
  }
});

// READ ONE
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundFaq = await faqs.findOne({ _id: id });

    if (!foundFaq) next(new Error('faq not found'));

    res.json({ faq: foundFaq });
  } catch (error) {
    next(error);
  }
});

// CREATE ONE
router.post('', async (req, res, next) => {
  try {
    await Schemas.mainSchema.validateAsync(req.body);

    const isFaqExists = await faqs.findOne({ question: req.body.question.trim() });

    if (isFaqExists) {
      throw new Error('Question already exists!');
    }

    const insertedFaq = await faqs.insert(req.body);

    res.json(insertedFaq);
  } catch (error) {
    next(error);
  }
});

// UPDATE ONE
router.put('/:id', async (req, res, next) => {
  try {
    const value = await Schemas.updateSchema.validateAsync(req.body);
    const { id } = req.params;

    const isFaqExists = await faqs.findOne({ _id: id });

    if (!isFaqExists) {
      throw new Error('Faq is not exists yet!');
    }

    await faqs.update({ _id: id }, {
      $set: value
    });

    res.json(value);
  } catch (error) {
    next(error);
  }
});

// DELETE ONE
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await faqs.remove({ _id: id }, { multi: false });

    if (deleted.deletedCount) {
      res.json({ success: true });
    }

    next(new Error('Not Found'));
  } catch (error) {
    next(error);
  }
});

export default router;
