import { RequestHandler } from 'express'

import TrackDataBody from '@/api/models/TrackDataBody'

export const trackData: RequestHandler = (req, res) => {
  const data = (req.body as TrackDataBody).data

  console.log('Stored data:', data)

  res.status(200).json({
    message: 'Success',
  })
}
