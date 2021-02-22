import "./styles.css";
import axios from "axios";


function App() {
  async function myFunction() {
    const response = await axios.post(
      "https://decision.flagship.io/v2/c0oslj75thv3diko6fkg/campaigns",
      {
        visitor_id: "my_visitor871",
        context: {
          "color": "red"
        },
        // Should the Decision API trigger an activation campaign hit
        trigger_hit: true,
        // Optional: find more details at https://developers.flagship.io/api/v2/#decision-group
        decision_group: null
      },
  
      {
        headers: {
          "x-api-key": "d0lq1xTfpm2inQZbHE4zK2NUmwCPj4S57T0EgaAV"
        }
      }
    );
  }

  return (
    <button type="button"  class="btn btn-primary btn-lg btn-block" onClick={myFunction()}> Call To Action!   
    </button>
  );
}

// export const MyReactComponent = () => {
//   const fsModifications = useFsModifications([
//     {
//       key: "backgroundColor",
//       defaultValue: "green",
//       activate: false,
//     },
//   ]);
//   return (
//     <div
//       style={{
//         height: "200px",
//         width: "200px",
//         _backgroundColor: fsModifications.backgroundColor,
//         get backgroundColor() {
//           return this._backgroundColor;
//         },
//         set backgroundColor(value) {
//           this._backgroundColor = value;
//         },
//       }}
//     >
//       {"I'm a square with color=" + fsModifications.backgroundColor}
//     </div>
//   );
// };

export default App;
