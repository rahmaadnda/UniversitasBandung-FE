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

const CPMKTable = ({ cPMKDataList, cPLSelectionField, mataKuliahSelectionField

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (cPMKItem) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMobile() && navigate(`/cpmk/${cPMKItem.id}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[cPMKDataList, cPLSelectionField, mataKuliahSelectionField]}
  	  detail={detail}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "CPL",
  	      featureName: "cplName",
  	      options: cPLSelectionField,
  	    }
  , 	    {
  	      label: "Mata Kuliah",
  	      featureName: "mataKuliahName",
  	      options: mataKuliahSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  		{
            id: "kode",
            condition: "isHeading",
            label: "Kode",
            featureName: "kode",
  		}
  ,
  		{
            id: "deskripsi",
            condition: "isHeading",
            label: "Deskripsi",
            featureName: "deskripsi",
  		}
  ,
  		{
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
            featureName: "bobot",
  		}
  ,
  		{
            id: "cPL",
            condition: "isHeading",
            label: "CPL",
            featureName: "cplName",
  		}
  ,
  		{
            id: "mataKuliah",
            condition: "isHeading",
            label: "Mata Kuliah",
            featureName: "mataKuliahName",
  		}
  ,
  ,
  	  ]}
        itemsEvents={(cPMKItem) => [
          // eslint-disable-next-line react/jsx-key
          <Link to={`/cpmk/${cPMKItem.id}`}>
            <Button
          	size="sm"
          	variant=
          		"primary"
            >
              Detail
            </Button>
          </Link>
          
          
        ]}
    	  itemsModals={(cPMKItem) => [
        ]}
  	/>
  )
};

export default CPMKTable;
