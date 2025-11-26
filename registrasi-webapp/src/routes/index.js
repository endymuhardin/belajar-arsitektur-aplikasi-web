import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('home'); // akan render src/views/home.hbs
});

export default router;
