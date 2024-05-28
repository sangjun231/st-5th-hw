import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TextsProvider } from "./context/TextsContext";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.

  return (
    <TextsProvider>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </TextsProvider>
  );
}

export default App;
