/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';

import CariMahasiswa from './containers/CariMahasiswa'
import DetailMahasiswa from './containers/DetailMahasiswa'

const verifikasiMahasiswaRoutes = [
	{ 
		path: "/verifikasimahasiswa",
		element: <CariMahasiswa />,
	},
	{ 
		path: "/verifikasimahasiswa/detail/:id",
		element: <DetailMahasiswa />,
	}
]

export default verifikasiMahasiswaRoutes
