import { NextApiRequest, NextApiResponse } from 'next';

const testApi = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') {
    res.status(405).send('Method not allowed');
    return;
  }

  res.status(200).json({ message: 'Test API route is working!' });
};

export default testApi;