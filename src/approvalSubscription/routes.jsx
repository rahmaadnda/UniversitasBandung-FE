/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import RequireAuth from '@/commons/auth/RequireAuth'

import ApprovalSubscriptionPage from './containers/ApprovalSubscriptionPage'

const approvalSubscriptionRoutes = [
{ 
	path: "/approvalsubscription",
	element: <RequireAuth permissionNeeded="SubscriptionApproveIndustri" ><ApprovalSubscriptionPage/></RequireAuth>
}

	

]

export default approvalSubscriptionRoutes
