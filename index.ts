import { NowResponse } from '@vercel/node'

module.exports = (_: any, res: NowResponse) => {
  res.json({ message: 'hello there!' })
}
