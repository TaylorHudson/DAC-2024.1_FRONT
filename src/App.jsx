import "bootswatch/dist/litera/bootstrap.css";
import AppRoutes from "./routes/AppRoutes";
import "toastr/build/toastr.css";
import "toastr/build/toastr.min.js"

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;