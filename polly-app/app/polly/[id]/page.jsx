import { getPolly } from "../../repositories/Polly.repository";

export default async function PollyPage({ params }) {
  const { id } = params;

  const polly = await getPolly(id);

  return (
    <>
      <h1>{polly.title}</h1>

      <ul>
        {polly.questions.map(({ id, title, responses }) => {
          return (
            <li key={id}>
              <h2>{title}</h2>

              <ul>
                {responses.map(({ id: responseId, text }) => (
                  <li key={responseId}>{text}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </>
  );
}
