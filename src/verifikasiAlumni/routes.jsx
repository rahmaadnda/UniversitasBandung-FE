/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import CariAlumni from './containers/CariAlumni'
import DetailAlumni from './containers/DetailAlumni'

const verifikasiAlumniRoutes = [
{ 
	path: "/verifikasialumni/detail/:id",
	element: <DetailAlumni />,
}

	
,
{ 
	path: "/verifikasialumni",
	element: <CariAlumni />,
}

	

]

export default verifikasiAlumniRoutes
