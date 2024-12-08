import Main from "./compo/main/page";
import Arrival from "./compo/arrival/page";
import GYM from "./compo/gym/page";

export default function Home() {
  return (
    <div>
      <Main/>
      <Arrival/>
      <GYM/>
    </div>
  );
}
