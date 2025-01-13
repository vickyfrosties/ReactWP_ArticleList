import Article from "./components/Article/Article";

function App() {

  return (
    <>
      <h1>
        WP React
      </h1>
      <Article
        title="Welcome back to 2020 !"
        resume="Old 2020 article"
        date={new Date(2020, 11, 30)}
      />

      <Article
        title="Starting 2025 with great news 😀"
        resume="This is a test"
        date={new Date(2025, 0, 2)}
      />

      <Article
        title="Today"
        resume="This is a test"
        date={new Date(2025, 0, 13)}
      />
    </>
  );
}

export default App;
