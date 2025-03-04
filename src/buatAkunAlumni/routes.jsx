/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import BuatAkunAlumniPage from './containers/BuatAkunAlumniPage'
import DetailAkunAlumniPage from './containers/DetailAkunAlumniPage'

const buatAkunAlumniRoutes = [
{ 
	path: "/buatakunalumni/detail/:email",
	element: <RequireAuth permissionNeeded="CreateAkunAlumni" ><DetailAkunAlumniPage/></RequireAuth>
}

	
,
{ 
	path: "/buatakunalumni",
	element: <RequireAuth permissionNeeded="CreateAkunAlumni" ><BuatAkunAlumniPage/></RequireAuth>
}

	

]

export default buatAkunAlumniRoutes
