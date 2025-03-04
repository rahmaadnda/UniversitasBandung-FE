/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'
import React from 'react';

import DaftarMahasiswaPage from './containers/DaftarMahasiswaPage'
import DetailMahasiswaPage from './containers/DetailMahasiswaPage'

const daftarMahasiswaRoutes = [
	{ 
		path: "/daftarmahasiswa/detail/:id",
		element: <RequireAuth permissionNeeded="ReadMahasiswaPublic" ><DetailMahasiswaPage/></RequireAuth>
	},
	{ 
		path: "/daftarmahasiswa",
		element: <RequireAuth permissionNeeded="ReadMahasiswaPublic" ><DaftarMahasiswaPage/></RequireAuth>
	}
]

export default daftarMahasiswaRoutes
