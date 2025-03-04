/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ListMahasiswa from './containers/ListMahasiswa'

const updateLulusanRoutes = [
{ 
	path: "/updatelulusan",
	element: <RequireAuth permissionNeeded="GraduateMahasiswa" ><ListMahasiswa/></RequireAuth>
}

	

]

export default updateLulusanRoutes
