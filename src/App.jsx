import "bootswatch/dist/litera/bootstrap.css";
import AppRoutes from "./routes/AppRoutes";
import SessionProvider from "./SessionProvider";
import "toastr/build/toastr.css";
import "toastr/build/toastr.min.js"

function App() {
  return (
    <div className="App">
      <SessionProvider>
        <AppRoutes />
      </SessionProvider>
    </div>
  );
}

export default App;