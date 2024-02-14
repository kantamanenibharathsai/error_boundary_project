import ErrorBoundary from "./pages/error_boundary/ErrorBoundary";
import Counter from "./pages/counter/Counter";
import ErrorPage from "./pages/error_page/ErrorPage";


function App() {
  return (
    <ErrorBoundary ErrorPage={<ErrorPage />}>
      <Counter />
    </ErrorBoundary>
  );
}
export default App;