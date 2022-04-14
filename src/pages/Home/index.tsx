import { useContext, useState } from "react";

import { Container, Content } from "./style";
import CharactersContext from "../../context/useNinja";
import { Card } from "../../components/Card";

export function Home() {
	const [filter, setFilter] = useState("");
	const { characters } = useContext(CharactersContext);
	return (
		<>
			<Container>
				<Content>
					{characters ? (
						characters.map((character) => (
							<Card key={character.id} character={character} />
						))
					) : (
						<></>
					)}
				</Content>
			</Container>
		</>
	);
}
