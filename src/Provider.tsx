"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
interface ProviderProps {
  children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>{children}</ChakraProvider>
    </QueryClientProvider>
  );
};

export default Provider;
