import type { NextApiRequest, NextApiResponse } from 'next'
import getOverviewData, { TOverviewData } from '@/services/getOverviewData'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<TOverviewData>
) {
  const data = await getOverviewData()
  res.status(200).json(data)
}
