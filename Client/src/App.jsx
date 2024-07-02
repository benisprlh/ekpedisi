import { RouterProvider } from "react-router-dom";
import router from "./router/route";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
