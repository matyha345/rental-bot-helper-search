import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routesData } from './routes.data'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routesData.map(route => {
					return <Route key={route.path} path={route.path} element={<route.component />} />
				})}
				<Route path='*' element={<div>kek</div>} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
