/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import DaftarPengumumanAdminAkademikPage from './containers/DaftarPengumumanAdminAkademikPage'
import PostPengumumanAdminAkademikPage from './containers/PostPengumumanAdminAkademikPage'

const pengumumanAdminAkademikRoutes = [
	{ 
		path: "/pengumumanakademik",
		element: <RequireAuth permissionNeeded="ReadInformasiAkademik" ><DaftarPengumumanAdminAkademikPage/></RequireAuth>
	},
	{ 
		path: "/pengumumanakademik/post",
		element: <RequireAuth permissionNeeded="SaveInformasiAkademik" ><PostPengumumanAdminAkademikPage/></RequireAuth>
	}
]

export default pengumumanAdminAkademikRoutes
