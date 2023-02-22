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

type Pollys = Array<Polly>;




export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Pollys>
) {
    const pollys = POLLYS;

    res.status(200).json(pollys)
}
