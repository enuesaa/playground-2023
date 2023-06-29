import { 
    Refine,
    GitHubBanner, 
    WelcomePage,
    Authenticated, 
} from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

    import { AuthPage,ErrorComponent
,notificationProvider
,RefineThemes
,ThemedLayoutV2} from '@refinedev/chakra-ui';

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, { NavigateToResource, CatchAllNavigate, UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { Header } from "./components/header";
import { ChakraUIInferencer } from "@refinedev/inferencer/chakra-ui";





function App() {
    

    
    
    return (
        <BrowserRouter>
        <GitHubBanner />
        <RefineKbarProvider>
            {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
<ChakraProvider theme={RefineThemes.Blue}>
            <Refine notificationProvider={notificationProvider}
routerProvider={routerBindings}
dataProvider={dataProvider("https://api.fake-rest.refine.dev")} 
                options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                     
                }}
            >


                    <Routes>
                        <Route index element={<WelcomePage />} />
                        <Route path="blog-posts">
                                <Route index element={<ChakraUIInferencer />} />
                                <Route
                                    path="show/:id"
                                    element={<ChakraUIInferencer />}
                                />
                                <Route
                                    path="edit/:id"
                                    element={<ChakraUIInferencer />}
                                />
                                <Route
                                    path="create"
                                    element={<ChakraUIInferencer />}
                                />
                            </Route>
                    </Routes>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
            </Refine>
            </ChakraProvider>

        </RefineKbarProvider>
        </BrowserRouter>
      );
};

export default App;
