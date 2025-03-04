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

const MKTable = ({ mKRiwayatAkademisDataList
	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mKRiwayatAkademisDataList]}
  	  isSearchable
  	  itemsAttrs={[
  		{
            id: "kodeMK",
            condition: "isHeading",
            label: "Kode MK",
            featureName: "mataKuliahKode",
  		}
  ,
  		{
            id: "kurikulum",
            condition: "isHeading",
            label: "Kurikulum",
            featureName: "mataKuliahKurikulumName",
  		}
  ,
  		{
            id: "namaMK",
            condition: "isHeading",
            label: "Nama MK",
            featureName: "mataKuliahName",
  		}
  ,
  		{
            id: "kelas",
            condition: "isHeading",
            label: "Kelas",
            featureName: "nama",
  		}
  ,
  		{
            id: "term",
            condition: "isHeading",
            label: "Term",
            featureName: "semesterKode",
  		}
  ,
  		{
            id: "nilaiAkhir",
            condition: "isHeading",
            label: "Nilai Akhir",
            featureName: "nilaiAkhir",
  		}
  ,
  		{
            id: "nilaiHuruf",
            condition: "isHeading",
            label: "Nilai Huruf",
            featureName: "nilaiHuruf",
  		}
  	  ]}
  	/>
  )
};

export default MKTable;
