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

const MahasiswaTable = ({ mahasiswaDataList, angkatanSelectionField

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (mahasiswaItem) => {
    isMobile() && navigate(`/daftarmahasiswa/detail/${mahasiswaItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList, angkatanSelectionField]}
  	  detail={detail}
  	  filterFields={[
  	    {
  	      label: "Angkatan",
  	      featureName: "tahunAngkatan",
  	      options: angkatanSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  		{
            id: "tahunAngkatan",
            condition: "isHeading",
            label: "Tahun Angkatan",
            featureName: "tahunAngkatan",
  		}
  ,
  		{
            id: "statusAkademik",
            condition: "isHeading",
            label: "Status Akademik",
            featureName: "statusAkademik",
  		}
  ,
  	  ]}
        itemsEvents={(mahasiswaItem) => [
          <Link to={`/daftarmahasiswa/detail/${mahasiswaItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(mahasiswaItem) => [
        ]}
  	/>
  )
};

export default MahasiswaTable;
