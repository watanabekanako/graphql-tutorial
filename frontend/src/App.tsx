import "./App.css";
import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query {
    test {
      title
      author
    }
  }
`;
console.log(BOOKS);

function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.test.map(({ title, author }) => (
    <div key={title}>
      <p>
        {author} : {title}
      </p>
    </div>
  ));
}
function App() {
  return (
    <>
      <h2>graph</h2> <Books />
    </>
  );
}

export default App;
