/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ProfileAlumniPage from './containers/ProfileAlumniPage'
import UpdateProfilePage from './containers/UpdateProfilePage'

const profileAlumniRoutes = [
{ 
	path: "/profilealumni/update",
	element: <RequireAuth permissionNeeded="UpdateAlumni" ><UpdateProfilePage/></RequireAuth>
}

	
,
{ 
	path: "/profilealumni",
	element: <RequireAuth permissionNeeded="ReadDetailAlumni" ><ProfileAlumniPage/></RequireAuth>
}

	

]

export default profileAlumniRoutes
