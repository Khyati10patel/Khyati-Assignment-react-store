import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* Your routes/components */}
      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;