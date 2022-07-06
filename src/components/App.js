
import './App.css';
// import Left from './left_side/Left';
// import Right from './right_side/Right';
import Messagelist from './side_bar/Messagelist';
import ChatComponent from './chat_bar/ChatComponent';

function App() {
  return (
    <div className='app'>

      <div className='app-child'>

        <Messagelist />
        <ChatComponent />

      </div>

    </div>
    // <>
    // <Left />
    // <Right />
    // </>
  );
}

export default App;