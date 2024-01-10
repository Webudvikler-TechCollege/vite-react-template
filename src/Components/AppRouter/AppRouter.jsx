import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound"

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	)
}