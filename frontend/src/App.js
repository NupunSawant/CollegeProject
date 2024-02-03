import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Flex
				as="main"
				mt="72px"
				direction="column"
				py="6"
				px="6"
				bgColor="gray.200">
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/products/:id" element={<ProductScreen />} />
					<Route path="/cart/" element={<CartScreen />} />
					<Route path="/cart/:id" element={<CartScreen />} />
					<Route path="/login" element={<LoginScreen />} />
					<Route path="/register" element={<RegisterScreen />} />
					<Route path="/profile" element={<ProfileScreen />} />
				</Routes>
			</Flex>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
