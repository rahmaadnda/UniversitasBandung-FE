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

const NilaiTable = ({ laporanNilaiCPLDataList, kurikulumSelectionField
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[laporanNilaiCPLDataList]}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "kodeCPL",
            condition: "isHeading",
            label: "Kode CPL",
            featureName: "kode",
  		}
  ,
  		{
            id: "nilai",
            condition: "isHeading",
            label: "Nilai",
            featureName: "nilai",
  		}
  	  ]}
  	/>
  )
};

export default NilaiTable;
