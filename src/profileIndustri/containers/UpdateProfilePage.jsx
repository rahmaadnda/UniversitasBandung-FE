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
import ModifiedFormFormProfileUpdateIndustri from '../components/ModifiedFormFormProfileUpdateIndustri'

import getMakePublic from '../services/getMakePublic'
import getDataIndustriUpdate from '../services/getDataIndustriUpdate'
import getListDomainPerusahaan from '../services/getListDomainPerusahaan'
const UpdateProfilePage = props => {
const [isLoading, setIsLoading] = useState({
	formProfileUpdateIndustri: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [searchParams] = useSearchParams()
const id = searchParams.get('id')
const [dataIndustriUpdate, setDataIndustriUpdate] = useState()
const [listDomainPerusahaan, setListDomainPerusahaan] = useState()

useEffect(() => {
    const fetch = async () => {
	  setIsLoading(prev => ({...prev, formProfileUpdateIndustri: true}))
	  	const { data: makePublicResponse } = await getMakePublic({ id  })
	  	const { data: dataIndustriUpdateResponse } = await getDataIndustriUpdate({ id  })
		const { data: listDomainPerusahaanResponse } = await getListDomainPerusahaan({ id  })

		setMakePublic(makePublicResponse.data)
	    setDataIndustriUpdate(dataIndustriUpdateResponse.data)
	    setListDomainPerusahaan(listDomainPerusahaanResponse.data)


	    setIsLoading(prev => ({...prev, formProfileUpdateIndustri: false}))
    }
    fetch()
  }, [])

	
	useEffect(() => {
		setTitle("Update Profile Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/profileindustri
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
		singularName={"Profile"}
		isLoading={isLoading.formProfileUpdateIndustri}
	>
		{dataIndustriUpdate && listDomainPerusahaan ? 
		(<>
		 <ModifiedFormFormProfileUpdateIndustri
			{...{ 
				makePublic
, 				dataIndustriUpdate
, 				listDomainPerusahaan
				}}
		 /> 
		</>)  : (<></>)}
	</Layouts.FormContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default UpdateProfilePage

