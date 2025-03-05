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

const SemuaTable = ({ tahunLulusSelectionField, alumniDataList

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (semuaItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMobile() && navigate(`/daftarsemuaalumni/detail/${semuaItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[tahunLulusSelectionField, alumniDataList]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Tahun Lulus",
  	      featureName: "tahunLulus",
  	      options: tahunLulusSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  ,
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
            id: "tahunLulus",
            condition: "isHeading",
            label: "Tahun Lulus",
            featureName: "tahunLulus",
  		}
  	  ]}
        itemsEvents={(semuaItem) => [
          // eslint-disable-next-line react/jsx-key
          <Link to={`/daftarsemuaalumni/detail/${semuaItem.id}`}>
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
