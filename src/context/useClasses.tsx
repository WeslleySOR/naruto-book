import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Classe } from "../types/types";

interface PropsClassesContext {
	classes: Classe[];
	setClasses: React.Dispatch<React.SetStateAction<Classe[]>>;
}

const DEFAULT_VALUE = {
	classes: [] as Classe[],
	setClasses: () => {},
};

const ClassesContext = createContext<PropsClassesContext>(DEFAULT_VALUE);

const ClassesContextProvider: React.FC = ({ children }) => {
	const [classes, setClasses] = useState(DEFAULT_VALUE.classes);

	const getAllClasses = async () => {
		await api
			.get<Classe[]>("classes")
			.then((data) => setClasses(data.data))
			.catch((error) => console.error(error));
	};
	useEffect(() => {
		getAllClasses();
	}, []);
	return (
		<ClassesContext.Provider
			value={{
				classes,
				setClasses,
			}}
		>
			{children}
		</ClassesContext.Provider>
	);
};

export { ClassesContextProvider };
export default ClassesContext;
