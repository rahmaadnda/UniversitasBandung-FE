/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import PengajuanSubscriptionPage from './containers/PengajuanSubscriptionPage'
import DetailPengajuanSubscription from './containers/DetailPengajuanSubscription'

const pengajuanSubscriptionRoutes = [
{ 
	path: "/pengajuansubscription/detail/:subscriptionId",
	element: <RequireAuth permissionNeeded="SubscriptionRequestIndustri" ><DetailPengajuanSubscription/></RequireAuth>
}

	
,
{ 
	path: "/pengajuansubscription",
	element: <RequireAuth permissionNeeded="SubscriptionRequestIndustri" ><PengajuanSubscriptionPage/></RequireAuth>
}

	

]

export default pengajuanSubscriptionRoutes
