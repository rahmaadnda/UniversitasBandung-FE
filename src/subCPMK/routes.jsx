/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarSubCPMKPage from './containers/DaftarSubCPMKPage'
import DetailSubCPMKPage from './containers/DetailSubCPMKPage'
import TambahSubCPMKPage from './containers/TambahSubCPMKPage'
import UbahSubCPMKPage from './containers/UbahSubCPMKPage'

const subCPMKRoutes = [
	{ 
		path: "/subcpmk",
		element: <RequireAuth permissionNeeded="ReadSubCPMK" ><DaftarSubCPMKPage/></RequireAuth>,
	},
	{ 
		path: "/subcpmk/:id",
		element: <RequireAuth permissionNeeded="ReadSubCPMK" ><DetailSubCPMKPage /></RequireAuth>,
	},
	{ 
		path: "/subcpmk/tambah",
		element: <RequireAuth permissionNeeded="CreateSubCPMK" ><TambahSubCPMKPage/></RequireAuth>,
	},
	{ 
		path: "/subcpmk/ubah/:id",
		element: <RequireAuth permissionNeeded="UpdateSubCPMK" ><UbahSubCPMKPage/></RequireAuth>,
	}
]

export default subCPMKRoutes
