import { Provider } from "inversify-react";
import { FC } from "react";
import { Container } from "inversify";

// eslint-disable-next-line react/display-name
export const withProvider = (diContainer: Container, Component: FC) => () => {
  return (
    <Provider container={diContainer}>
      <Component />
    </Provider>
  );
};
