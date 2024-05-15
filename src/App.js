import './App.css';
import Banner from './componentes/Banner/Banner';
import CardForm from './componentes/CardForm/CardForm';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      </header> */}

      <Banner/>
      <CardForm/>


    </div>
  );
}

export default App;
