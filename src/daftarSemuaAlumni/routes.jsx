/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'
import React from 'react';

import DaftarSemuaAlumniPage from './containers/DaftarSemuaAlumniPage'
import DetailAlumniPage from './containers/DetailAlumniPage'

const daftarSemuaAlumniRoutes = [
	{ 
		path: "/daftarsemuaalumni/detail/:id",
		element: <RequireAuth permissionNeeded="ReadAlumni" ><DetailAlumniPage/></RequireAuth>
	},
	{ 
		path: "/daftarsemuaalumni",
		element: <RequireAuth permissionNeeded="ReadAlumni" ><DaftarSemuaAlumniPage/></RequireAuth>
	}
]

export default daftarSemuaAlumniRoutes
