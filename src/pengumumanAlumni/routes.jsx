/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'
import React from 'react';
import DaftarPengumumanAlumniPage from './containers/DaftarPengumumanAlumniPage'
import PostPengumumanAlumniPage from './containers/PostPengumumanAlumniPage'

const pengumumanAlumniRoutes = [
{ 
	path: "/pengumumanalumni/post",
	element: <RequireAuth permissionNeeded="SaveInformasiAlumni" ><PostPengumumanAlumniPage/></RequireAuth>
}

	
,
{ 
	path: "/pengumumanalumni",
	element: <RequireAuth permissionNeeded="ReadInformasiAlumni" ><DaftarPengumumanAlumniPage/></RequireAuth>
}

	

]

export default pengumumanAlumniRoutes
