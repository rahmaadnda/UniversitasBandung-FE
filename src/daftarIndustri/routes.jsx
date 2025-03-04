/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarIndustriPage from './containers/DaftarIndustriPage'
import DetailIndustriPage from './containers/DetailIndustriPage'

const daftarIndustriRoutes = [
	{ 
		path: "/daftarindustri",
		element: <RequireAuth permissionNeeded="ReadIndustri" ><DaftarIndustriPage/></RequireAuth>
	},
	{ 
		path: "/daftarindustri/detail/:id",
		element: <RequireAuth permissionNeeded="ReadIndustri" ><DetailIndustriPage/></RequireAuth>
	}
]

export default daftarIndustriRoutes
