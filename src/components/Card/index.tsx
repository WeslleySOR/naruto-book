import { useNavigate } from "react-router-dom";
import { Character } from "../../types/types";
import { Container } from "./style";

interface CardProps {
	character: Character;
}

export function Card({ character }: CardProps) {
	let navigate = useNavigate();

	const returnImageUrl = () => {
		if (character?.info.image !== "") return character?.info.image;
		else {
			return "https://s.cdnshm.com/catalog/br/t/137493061/poco-x3-nfc-64gb.jpg";
		}
	};
	return (
		<Container
			style={{
				backgroundImage: `url(${returnImageUrl()})`,
				backgroundSize: "cover",
			}}
			onClick={() => navigate(`/ninja/${character.id}`)}
		>
			<h1>{character.info.name}</h1>
		</Container>
	);
}
