/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from 'react';
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Modal } from '@/commons/components';

import * as Layouts from "@/commons/layouts";

const LaporanTable = ({ kelasSelectionField, laporanCPMKDataList, cpmkList = []
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[kelasSelectionField, laporanCPMKDataList]}
  	  isSearchable
  	  filterFields={[
  	    {
  	      label: "Kelas",
  	      featureName: "kelasSelectionField",
  	      options: kelasSelectionField,
  	    }
  	  ]}
  	  itemsAttrs={[
  ,
  		{
            id: "nPM",
            condition: "isHeading",
            label: "NPM",
            featureName: "npm",
  		}
  ,
  		{
            id: "nama",
            condition: "isHeading",
            label: "Nama",
            featureName: "nama",
  		}
  ,
  		{
            id: "kelas",
            condition: "isHeading",
            label: "Kelas",
            featureName: "kelasNama",
  		}
  	  ].concat(cpmkList.map(cpmk => {
		return {
			id: cpmk.id,
			condition: "IsHeading",
			label: cpmk.kode,
			featureName: cpmk.id
		}
	  }))}
  	/>
  )
};

export default LaporanTable;
