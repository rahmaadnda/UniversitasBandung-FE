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

const MahasiswaTable = ({ mahasiswaDataList

	}) => {
  const { checkPermission } = useAuth();
  	const { id, } = useParams();
  const navigate = useNavigate();
  const detail = async (mahasiswaItem) => {
    isMobile() && navigate(`/penilaian-kelas/${id}/nilai/${mahasiswaItem.mahasiswaId}`
    );
  };
  
  
  return (
    <Layouts.ListComponentTableLayout
  	  items={[mahasiswaDataList]}
  	  detail={detail}
  	  isSearchable
  	  itemsAttrs={[
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
  	  ]}
        itemsEvents={(mahasiswaItem) => [
          <Link to={`/penilaian-kelas/${id}/nilai/${mahasiswaId${mahasiswaItem.kelasId}`}>
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
