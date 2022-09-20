import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider } from "tailwind-rn";
import RootNavigator from "./navigator/RootNavigator";
import utilities from "./tailwind.json";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/ups-app",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindPrivider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
