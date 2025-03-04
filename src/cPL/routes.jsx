/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarCPLPage from './containers/DaftarCPLPage'
import DetailCPLPage from './containers/DetailCPLPage'
import TambahCPLPage from './containers/TambahCPLPage'
import UbahCPLPage from './containers/UbahCPLPage'

const cPLRoutes = [
	{ 
		path: "/cpl",
		element: <DaftarCPLPage />,
	},
	{ 
		path: "/cpl/:id",
		element: <DetailCPLPage />,
	},
	{ 
		path: "/cpl/tambah",
		element: <TambahCPLPage />,
	},
	{ 
		path: "/cpl/ubah",
		element: <UbahCPLPage />,
	}
]

export default cPLRoutes
