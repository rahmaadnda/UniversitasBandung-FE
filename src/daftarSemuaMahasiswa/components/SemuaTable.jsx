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

const SemuaTable = ({ mahasiswaDataList, angkatanSelectionField

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (semuaItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMobile() && navigate(`/daftarsemuamahasiswa/detail/${semuaItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList, angkatanSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Angkatan",
  	      featureName: "tahunAngkatan",
  	      options: angkatanSelectionField,
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
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
            featureName: "npm",
  		}
  ,
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
        itemsEvents={(semuaItem) => [
          // eslint-disable-next-line react/jsx-key
          <Link to={`/daftarsemuamahasiswa/detail/${semuaItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(semuaItem) => [
        ]}
  	/>
  )
};

export default SemuaTable;
