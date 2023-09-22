import { HelloClientComponent } from "./helloClientComponent";
import { HelloServerComponent } from "./helloServerComponent";

export default function Home() {
  return (
    <div>
      <p>server</p>
      <HelloServerComponent />
      <p>client</p>
      <HelloClientComponent />
    </div>
  );
}
