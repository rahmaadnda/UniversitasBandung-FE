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
		element: <DaftarSubCPMKPage />,
	},
	{ 
		path: "/subcpmk/:id",
		element: <DetailSubCPMKPage />,
	},
	{ 
		path: "/subcpmk/tambah",
		element: <TambahSubCPMKPage />,
	},
	{ 
		path: "/subcpmk/ubah/:id",
		element: <UbahSubCPMKPage />,
	}
]

export default subCPMKRoutes
