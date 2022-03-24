import data from "./data";
import Post from "./Post";
import Header from "./Header";

function App() {
  const postsData = data.map((x) => <Post id={x.id} item={x} />);

  return (
    <div className="app">
      <Header />
      {postsData}
    </div>
  );
}

export default App;
