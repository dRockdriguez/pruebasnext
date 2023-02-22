// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { POLLYS } from './pollys';

type Response = {
    id: string,
    text: string
}

type Question = {
    title: string,
    id: string,
    responses: Array<Response>
}

type Polly = {
    title: string,
    id: string,
    questions: Array<Question>
}



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Polly | {}>
) {
    const { id } = req.query

    const pollys = POLLYS;

    const polly = pollys.find(({ id: pollyId }) => pollyId === id) || {};

    res.status(200).json(polly)
}
