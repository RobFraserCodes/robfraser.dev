import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req:NextApiRequest, res:NextApiResponse) {
  
  if (req.method === 'POST') {
    console.log('server side body: ', req.body);
  } else {
    return res.status(400).json({ data: 'not a POST request' });
  }

}