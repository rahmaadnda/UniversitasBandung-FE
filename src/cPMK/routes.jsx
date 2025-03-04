/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarCPMKPage from './containers/DaftarCPMKPage'
import DetailCPMKPage from './containers/DetailCPMKPage'
import TambahCPMKPage from './containers/TambahCPMKPage'
import UbahCPMKPage from './containers/UbahCPMKPage'

const cPMKRoutes = [
	{ 
		path: "/cpmk",
		element: <RequireAuth permissionNeeded="ReadCPMK" ><DaftarCPMKPage/></RequireAuth>,
	},
	{ 
		path: "/cpmk/:id",
		element: <RequireAuth permissionNeeded="ReadCPMK" ><DetailCPMKPage/></RequireAuth>,
	},
	{ 
		path: "/cpmk/tambah",
		element: <RequireAuth permissionNeeded="CreateCPMK" ><TambahCPMKPage/></RequireAuth>,
	},
	{ 
		path: "/cpmk/ubah",
		element: <RequireAuth permissionNeeded="UpdateCPMK" ><UbahCPMKPage/></RequireAuth>,
	}
]

export default cPMKRoutes
