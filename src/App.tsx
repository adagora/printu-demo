import { useEffect } from "react";
import "./App.css";
import { ProjectBody } from "./component/ProjectBody/ProjectBody";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/reducers/rootReducer";
import { fetchInitRequest } from "./store/actions/postsActions/postsActions";
import { fetchProductRequest } from "./store/actions/productActions/productActions";
import { validateId } from "./component/helpers/validateId";

function App() {
  const dispatch = useDispatch();
  const { pending, data, error } = useSelector(
    (state: RootState) => state.data
  );

  console.log("error", error);

  useEffect(() => {
    dispatch(fetchInitRequest());
  }, []);

  let inputIsValid = true;

  const handleInputChange = (event: any) => {
    const inputValue = event.target.value;
    inputIsValid = validateId(inputValue);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const inputElement = event.target[0];
    const id = inputElement.value;

    if (validateId(id)) {
      return;
    }

    dispatch(fetchProductRequest(id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PRINTU</h1>
      </header>
      {error && <div className="error-message">{error}</div>}

      {pending ? (
        <div>Loading...</div>
      ) : (
        <main>
          <>
            <div className="top-container">
              {data && <span>Name: {data.name}</span>}
              {data && <span>ID: {data.id}</span>}
              <div className="top-container-inner">
                <form onSubmit={handleSubmit}>
                  <label>Project ID: </label>
                  <input
                    type="text"
                    placeholder="Enter project ID"
                    className="input-field"
                    style={{
                      width: "200px",
                      height: "30px",
                    }}
                    onInput={handleInputChange}
                  />
                  <button type="submit" disabled={!inputIsValid}>
                    Fetch
                  </button>
                </form>
              </div>
            </div>
          </>

          {data ? <ProjectBody id={data.id} /> : "no data"}
        </main>
      )}
    </div>
  );
}

export default App;
