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

const KomponenTable = ({ komponenPenilaianDataList

	}) => {
  const { checkPermission } = useAuth();
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[komponenPenilaianDataList]}
  	  itemsAttrs={[
  		{
            id: "komponen",
            condition: "isHeading",
            label: "Komponen",
            featureName: "nama",
  		}
  ,
  		{
            id: "bobot",
            condition: "isHeading",
            label: "Bobot",
            featureName: "bobot",
  		}
  	  ]}
        itemsEvents={(komponenItem) => [
          checkPermission("UpdateKomponenPenilaian") &&  (
            <Link to={`/penilaian-kelas/${id}/komponen/${komponenId}/ubah${komponenItem.kelasId}`}>
              <Button
            	size="sm"
            	variant=
            		"primary"
              >
                Ubah Komponen
              </Button>
            </Link>
            
          )
          
        ]}
    	  itemsModals={(komponenItem) => [
        ]}
  	/>
  )
};

export default KomponenTable;
