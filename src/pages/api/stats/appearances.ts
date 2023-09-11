import type { NextApiRequest, NextApiResponse } from 'next'
import getAppearancesData, { TAppearanceData } from '@/services/getAppearancesDataData';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TAppearanceData[]>
) {
  const data = await getAppearancesData()
  res.status(200).json(data)
}
