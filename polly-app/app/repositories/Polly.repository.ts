

type Response = {
    id: string,
    text: string
}

type Answer = {
    title: string,
    id: string,
    responses: Array<Response>
}

type Polly = {
    title: string,
    id: string,
    answers: Array<Answer>
}

type Pollys = Array<Polly>;

export const getPollys = async (): Promise<Pollys> => {
    return await fetch('http://localhost:3000/api/pollys').then(res => res.json());
}


export const getPolly = async (id: string): Promise<Polly> => {
    return await fetch(`http://localhost:3000/api/pollys/${id}`).then(res => res.json());
}