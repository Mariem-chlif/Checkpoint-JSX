import map from "./map.jpg"
import './Style.css';

function App() {
  return (
    <div className="App"  style={{border:"solid 1px black",maxWidth:"100vw"}} >
    <div >    
  
      <h1 class="title red">Mariem chlif </h1>
      <br />
      <img   src={map} alt ='myImage' />
      <br />
      <img   style={{width:'600px',height:'300px' }}  src="/Sidi-Bou-Said.jpg" alt="myimage" />
      <br />
      
      </div>
      <iframe width="320" height="240" src="https://www.youtube.com/embed/OtJVufo3IrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    </div>
  );
}

export default App;
