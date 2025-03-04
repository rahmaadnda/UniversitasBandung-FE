/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'
import React from 'react';
import DaftarAlumniPage from './containers/DaftarAlumniPage'
import DetailAlumniPage from './containers/DetailAlumniPage'

const daftarAlumniRoutes = [
{ 
	path: "/daftaralumni/detail/:id",
	element: <RequireAuth permissionNeeded="ReadAlumniPublic" ><DetailAlumniPage/></RequireAuth>
}

	
,
{ 
	path: "/daftaralumni",
	element: <RequireAuth permissionNeeded="ReadAlumniPublic" ><DaftarAlumniPage/></RequireAuth>
}

	

]

export default daftarAlumniRoutes
