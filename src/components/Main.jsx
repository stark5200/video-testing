import videoBg from "../assests/4K_trees.mp4"

function Main() {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted/>
        <div className="content">
          <h1>Welcome</h1>
          <p>To my site.</p>
        </div>
      </div>
    </div>
  );
}

export default Main;