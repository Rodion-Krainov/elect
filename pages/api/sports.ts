import { NextApiRequest, NextApiResponse } from 'next';
import { getSportsForWeek } from '../../lib/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { date } = req.query;

  if (!date) {
    return res.status(400).json({ error: 'Date parameter is required' });
  }

  const sports = await getSportsForWeek(date as string);
  res.status(200).json(sports);
};
