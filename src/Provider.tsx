"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { NextUIProvider } from "@nextui-org/react";
import { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
interface ProviderProps {
  children: React.ReactNode;
}

const Provider: FC<ProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <NextUIProvider>
          <Toaster />
          {children}
        </NextUIProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default Provider;
