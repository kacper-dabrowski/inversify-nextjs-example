import { types } from "../modules/hello/hello";
import { Hello } from "../modules/hello/hello";
import container from "../modules/hello/diContainer";
export const HelloServerComponent = () => {
  const hello = container.get<Hello>(types.HelloService);

  return (
    <div>
      <p>server</p>
      {Object.entries(hello.greet()).map(([key, value]) => `${key} ${value}`)}
    </div>
  );
};
