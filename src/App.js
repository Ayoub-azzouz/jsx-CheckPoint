import './App.css';
import ProfilePhoto from './component/profile/ProfilePhoto';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Adress';
function App() {

  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Adress />  

    </div>
  );
}

export default App;
