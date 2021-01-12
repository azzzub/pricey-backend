import { NowResponse } from '@vercel/node'

module.exports = (_: any, res: NowResponse) => {
  res.status(404).json({ message: 'where u wanna go?' })
}
