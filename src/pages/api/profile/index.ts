import type { NextApiRequest, NextApiResponse } from 'next'
import getProfileData, { TProfileData } from '@/services/getProfileData';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TProfileData>
) {
  const data = await getProfileData()
  res.status(200).json(data)
}
