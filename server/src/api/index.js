import express from 'express';

import emojis from './emojis';
import faqs from './faqs';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/faqs', faqs);

router.use('/emojis', emojis);

export default router;
