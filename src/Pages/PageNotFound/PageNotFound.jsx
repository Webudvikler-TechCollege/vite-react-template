import { Link } from "react-router-dom"
import { ContentWrapper } from "../../Components/ContentWrapper/ContentWrapper"

export const PageNotFound = () => {
	return (
		<>
			<ContentWrapper title="Siden blev ikke fundet">
				<p>Gå til <Link to="/">forsiden</Link></p>
			</ContentWrapper>	
		</>
	)
}
