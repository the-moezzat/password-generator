import Form from './components/Form';
import PasswordField from './components/PasswordField';

function App() {
  return (
    <>
      <div className="bg-gradient-to-t from-gradient-900 to-gradient-100 h-screen grid content-center justify-center">
        <div className="w-96 flex flex-col gap-4">
          <h3 className="text-stone-400 font-bold text-xl text-center">
            Password Generator
          </h3>
          <PasswordField />
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
