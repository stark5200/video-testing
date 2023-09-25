import videoBg from "../assests/4K_trees.mp4"

function BGVideo() {
  return (
    <div className="main">
      <div className="overlay">
        <video src={videoBg} autoPlay loop muted/>
        <div className="content">
        </div>
      </div>
    </div>
  );
}

export default BGVideo;