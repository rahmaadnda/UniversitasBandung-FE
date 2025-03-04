/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import subscriptionApproveIndustri from '../services/subscriptionApproveIndustri'

import * as Layouts from "@/commons/layouts";

const ApprovalTable = ({ approvalSubscriptionListData

	}) => {
  const { checkPermission } = useAuth();
  
  const [showModalKonfirmasiApprovalSubscription, setShowModalKonfirmasiApprovalSubscription] = React.useState(false);
  const setujui = async  (approval) => {
    await subscriptionApproveIndustri({
        id: approval.id,
    });
    window.location.reload(false);
      };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[approvalSubscriptionListData]}
  	  itemsAttrs={[
  		{
            id: "emailPerusahaan",
            condition: "isHeading",
            label: "Email Perusahaan",
            featureName: "email",
  		}
  ,
  		{
            id: "namaPerusahaan",
            condition: "isHeading",
            label: "Nama Perusahaan",
            featureName: "nama",
  		}
  ,
  		{
            id: "paketMembership",
            condition: "isHeading",
            label: "Paket Membership",
            featureName: "subscriptionSubscriptionplanName",
  		}
  ,
  		{
            id: "statusPengajuan",
            condition: "isHeading",
            label: "Status Pengajuan",
            featureName: "subscriptionStatus",
  		}
  	  ]}
        itemsEvents={(approvalItem) => [
          checkPermission("SubscriptionApproveIndustri") &&  (
            <Link to=''>
              <Button
            	size="sm"
            	variant=
            				"secondary"
                onClick={() => setShowModalKonfirmasiApprovalSubscription(true)}
              >
                Setujui
              </Button>
            </Link>
            
          )
          
        ]}
    	  itemsModals={(approvalItem) => [
  	      <Modal
  	         isShow={showModalKonfirmasiApprovalSubscription}
  	         title={"Konfirmasi Approval Subscription"}
  	      >
  	       <Link to=''><Button variant="tertiary" onClick={() => setShowModalKonfirmasiApprovalSubscription(false)}>Batal</Button></Link>
  	      <Button
  	        variant="secondary"
  	        onClick={() => setujui(approvalItem)}
  	      >
  	        Setujui
  	      </Button>
  	      </Modal>
  	      
        ]}
  	/>
  )
};

export default ApprovalTable;
