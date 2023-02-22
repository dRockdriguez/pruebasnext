import Link from "next/link";
import { getPollys } from "./repositories/Polly.repository";

export default async function HomePage() {

  const pollys = await getPollys();

  return (
    <div>
      <ul>
        {pollys.map(({ title, id }) => (
          <li key={id}>
            <Link href={`/polly/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
