/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'
import React from 'react';

import DaftarSemuaMahasiswaPage from './containers/DaftarSemuaMahasiswaPage'
import DetailMahasiswaPage from './containers/DetailMahasiswaPage'

const daftarSemuaMahasiswaRoutes = [
	{ 
		path: "/daftarsemuamahasiswa/detail/:id",
		element: <RequireAuth permissionNeeded="ReadMahasiswa" ><DetailMahasiswaPage/></RequireAuth>
	},
	{ 
		path: "/daftarsemuamahasiswa",
		element: <RequireAuth permissionNeeded="ReadMahasiswa" ><DaftarSemuaMahasiswaPage/></RequireAuth>
	}
]

export default daftarSemuaMahasiswaRoutes
