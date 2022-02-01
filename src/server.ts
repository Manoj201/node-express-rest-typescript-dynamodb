import express, { Request, Response } from 'express';
import dotenv from 'dotenv-safe';

const app = express();
dotenv.config();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works! Nicely Done');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Application started on port ${process.env.PORT || 3000}!`);
});
