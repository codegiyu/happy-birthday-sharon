// const akaneko = require('akaneko');
import akaneko from "akaneko";

import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = await fetch("https://restcountries.com/v3.1/alpha/NGA")
    console.log({result})
    res.status(200).json({ result })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}