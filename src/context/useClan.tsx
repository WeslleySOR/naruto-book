import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Clan } from "../types/types";

interface PropsClansContext {
	clans: Clan[];
	setClans: React.Dispatch<React.SetStateAction<Clan[]>>;
}

const DEFAULT_VALUE = {
	clans: [] as Clan[],
	setClans: () => {},
};

const ClansContext = createContext<PropsClansContext>(DEFAULT_VALUE);

const ClansContextProvider: React.FC = ({ children }) => {
	const [clans, setClans] = useState(DEFAULT_VALUE.clans);

	const getAllClans = async () => {
		await api
			.get<Clan[]>("clans")
			.then((data) => {
				const array = data.data;
				array.splice(0, 1);
				array.sort((a, b) => (a.name > b.name && 1) || -1);
				const newArray = [{ name: "Desconhecido" }];
				array.map((arr) => newArray.push(arr));
				setClans(newArray);
			})
			.catch((error) => console.error(error));
	};
	useEffect(() => {
		getAllClans();
	}, []);
	return (
		<ClansContext.Provider
			value={{
				clans,
				setClans,
			}}
		>
			{children}
		</ClansContext.Provider>
	);
};

export { ClansContextProvider };
export default ClansContext;
