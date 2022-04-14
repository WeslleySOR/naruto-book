import Modal from "react-modal";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewObjectModal } from "./components/NewObjectModal";
import { Home } from "./pages/Home";
import { Ninja } from "./pages/Ninja";
import { Container } from "./styles/app";
import { globalStyles } from "./styles/global";
import { Header } from "./components/Header";
import { EditNinjaModal } from "./components/EditNinjaModal";
import GlobalContext from "./context";

Modal.setAppElement("#root");

function App() {
	globalStyles();
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);
	const [isEditNinjaModalOpen, setIsEditNinjaModalOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}
	function handleOpenEditNinjaModal() {
		setIsEditNinjaModalOpen(true);
	}

	function handleCloseEditNinjaModal() {
		setIsEditNinjaModalOpen(false);
	}
	return (
		<GlobalContext>
			<Container>
				<BrowserRouter>
					<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="ninja/:id"
							element={
								<Ninja onOpenEditNinjaModal={handleOpenEditNinjaModal} />
							}
						/>
					</Routes>
					<NewObjectModal
						isOpen={isNewTransactionModalOpen}
						onResquestClose={handleCloseNewTransactionModal}
					/>
					<EditNinjaModal
						isOpen={isEditNinjaModalOpen}
						onResquestClose={handleCloseEditNinjaModal}
					/>
				</BrowserRouter>
			</Container>
		</GlobalContext>
	);
}

export default App;
