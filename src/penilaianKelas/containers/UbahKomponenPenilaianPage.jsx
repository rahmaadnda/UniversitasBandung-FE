/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from "react-router";
import { HeaderContext } from "@/commons/components"
import { useSearchParams } from "react-router";
import FormUbahKomponenPenilaian from '../components/FormUbahKomponenPenilaian'

import getKomponenPenilaianUbah from '../services/getKomponenPenilaianUbah'
const UbahKomponenPenilaianPage = props => {
const [isLoading, setIsLoading] = useState({
	ubahKomponenPenilaian: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const kelasId = searchParams.get('kelasId')
const [komponenPenilaianUbah, setKomponenPenilaianUbah] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, ubahKomponenPenilaian: true}))
		const { data: komponenPenilaianUbahResponse } = await getKomponenPenilaianUbah({ id  })

	    setKomponenPenilaianUbah(komponenPenilaianUbahResponse.data)


	    setIsLoading(prev => ({...prev, ubahKomponenPenilaian: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Ubah Komponen Penilaian Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas/:id
			  	`}>
			  		<Button className="p-4" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.FormContainerLayout
		singularName={"Komponen"}
		isLoading={isLoading.ubahKomponenPenilaian}
	>
		{komponenPenilaianUbah ? 
		(<>
		 <FormUbahKomponenPenilaian
			{...{ 
				komponenPenilaianUbah
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UbahKomponenPenilaianPage

