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

const LaporanTable = ({ laporanCPLDataList, cplList = []
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[laporanCPLDataList]}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "kode",
            condition: "isHeading",
            label: "Kode",
            featureName: "kode",
  		}
  ,
  		{
            id: "mataKuliah",
            condition: "isHeading",
            label: "Mata Kuliah",
            featureName: "nama",
  		}
  	  ].concat(
        cplList.map((cpl) => {
          return {
            id: cpl.id,
            condition: "IsHeading",
            label: cpl.kode,
            featureName: cpl.id,
          };
        })
      )}
  	/>
  )
};

export default LaporanTable;
