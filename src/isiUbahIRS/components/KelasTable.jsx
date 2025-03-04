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

const KelasTable = ({ kelasRencanaStudiDataList

	}) => {
  const { checkPermission } = useAuth();
  const navigate = useNavigate();
  const detail = async (kelasItem) => {
    isMobile() && navigate();
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[kelasRencanaStudiDataList]}
  	  detail={detail}
  	  itemsAttrs={[
  		{
            id: "namaKelas",
            condition: "isHeading",
            label: "Nama Kelas",
            featureName: "nama",
  		}
  ,
  		{
            id: "kapasitas",
            condition: "isHeading",
            label: "Kapasitas",
            featureName: "kapasitas",
  		}
  ,
  		{
            id: "jadwal",
            condition: "isHeading",
            label: "Jadwal",
            featureName: "jadwal",
  		}
  ,
  		{
            id: "ruangan",
            condition: "isHeading",
            label: "Ruangan",
            featureName: "ruangan",
  		}
  ,
  		{
            id: "pengajar",
            condition: "isHeading",
            label: "Pengajar",
            featureName: "dosen",
  		}
  ,
  		{
            id: "periode",
            condition: "isHeading",
            label: "Periode",
            featureName: "semesterTanggal",
  		}
  	  ]}
        itemsEvents={(kelasItem) => [
          
          
        ]}
    	  itemsModals={(kelasItem) => [
        ]}
  	/>
  )
};

export default KelasTable;
