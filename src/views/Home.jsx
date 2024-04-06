import Video from "../assets/introducao.mp4";
import NavBar from "../components/nav-bar/NavBar";

function Home() {
  return (
      <div className="container">
        <NavBar />
        <main className="mt-1 p-1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <video style={{ width: '320px', height: '80vh' }} autoPlay loop>  
            <source src={Video} type="video/mp4"/>
          </video>
        </main>
      </div>
  );
}

export default Home;