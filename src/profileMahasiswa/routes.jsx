/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'
import React from 'react';

import ProfileMahasiswaPage from './containers/ProfileMahasiswaPage'
import UpdateProfilePage from './containers/UpdateProfilePage'

const profileMahasiswaRoutes = [
	{ 
		path: "/profilemahasiswa/update",
		element: <RequireAuth permissionNeeded="UpdateMahasiswa" ><UpdateProfilePage/></RequireAuth>
	},
	{ 
		path: "/profilemahasiswa",
		element: <RequireAuth permissionNeeded="ReadDetailMahasiswa" ><ProfileMahasiswaPage/></RequireAuth>
	}
]

export default profileMahasiswaRoutes
