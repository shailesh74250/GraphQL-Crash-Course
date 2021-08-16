import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
query ExampleQuery {
    books {
      title,
      author
    }
  }    
`;

export default function Todos() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return (
        data.books.map(({ title, author }) => (
            <div key={title}>
              <p>
                {author}
              </p>
            </div>
          ))
    )
}
