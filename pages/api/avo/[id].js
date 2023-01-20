import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'
// import enablePublicAccess from '@cors'

const AvoDetail = async (req, res) => {
  try {
    // Generally, you would not want this in your apps.
    // See more in 'cors.js'
    //await enablePublicAccess(req, res)

    const db = new DB()
    const avoId = req.query.id 

    const avo = await db.getById(avoId)

    // Notice: We're using Next.JS response helpers here :)
    // https://nextjs.org/docs/api-routes/response-helpers
    res.status(200).json(avo)
  } catch (e) {
    console.error(e)
    res.status(404).end()
  }
}

export default AvoDetail