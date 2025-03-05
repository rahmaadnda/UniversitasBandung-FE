/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';
import { isMobile } from '@/commons/utils/responsive';

import * as Layouts from "@/commons/layouts";

const IndustriTable = ({ industriDataList, domainPerusahaanSelectionField

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (industriItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMobile() && navigate(`/daftarindustri/detail/${industriItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[industriDataList, domainPerusahaanSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Domain Bidang Perusahaan",
  	      featureName: "domain",
  	      options: domainPerusahaanSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
  		}
  ,
  		{
            id: "domainBidangPerusahaan",
            condition: "isHeading",
            label: "Domain Bidang Perusahaan",
            featureName: "domain",
  		}
  ,
  		{
            id: "jumlahKaryawan",
            condition: "isHeading",
            label: "Jumlah Karyawan",
            featureName: "jumlahKaryawan",
  		}
  ,
  	  ]}
        itemsEvents={(industriItem) => [
          // eslint-disable-next-line react/jsx-key
          <Link to={`/daftarindustri/detail/${industriItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(industriItem) => [
        ]}
  	/>
  )
};

export default IndustriTable;
