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

import DetailsPengajuanSubscription from '../components/DetailsPengajuanSubscription'
import getDetailPengajuanSubscriptionBinding from '../services/getDetailPengajuanSubscriptionBinding'
const DetailPengajuanSubscription = props => {
const [isLoading, setIsLoading] = useState({
	detailsPengajuanSubscription: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [detailPengajuanSubscriptionBinding, setDetailPengajuanSubscriptionBinding] = useState()
const { subscriptionId } = useParams()
useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailsPengajuanSubscription: true}))
			const { data: detailPengajuanSubscriptionBinding } = await getDetailPengajuanSubscriptionBinding({ subscriptionId })
			setDetailPengajuanSubscriptionBinding(detailPengajuanSubscriptionBinding.data)
		} finally {
			setIsLoading(prev => ({...prev, detailsPengajuanSubscription: false}))
		}
	}
	 fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Pengajuan Subscription")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/pengajuansubscription
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			</>
		}
	>
<Layouts.DetailContainerLayout
	title={"Details Pengajuan Subscription"}
	singularName={"Pengajuan"}
	items={{...detailPengajuanSubscriptionBinding}}
	isLoading={isLoading.detailsPengajuanSubscription}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailsPengajuanSubscription {...{ data : { ...detailPengajuanSubscriptionBinding }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailPengajuanSubscription

