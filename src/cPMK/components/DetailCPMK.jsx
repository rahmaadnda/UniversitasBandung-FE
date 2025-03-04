/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useContext } from 'react';
import { useNavigate, Link } from "react-router";

import { useAuth } from '@/commons/auth';
import { Button, Detail, VisualizationAttr, Modal, Spinner } from '@/commons/components';

import deleteCPMK from '../services/deleteCPMK';

import * as Layouts from "@/commons/layouts";


const DetailCPMK = ({ data }) => {
    const { checkPermission } = useAuth();
    const navigate = useNavigate();
    const ubahCPMK = async () => {
      navigate(
        '/cpmk/ubah?'
        + `id=${data.id}`
        
      );
    };
    
    
  
    const hapus = async () => {
      await deleteCPMK({
      });
      navigate('/cpmk');
    };
  
  return (
    <Layouts.DetailComponentLayout
      item={data}
      itemsAttrs={[
        {
          id: "kode",
          condition: "",
          label: "Kode",
          featureName: "kode",
        }
        ,
        {
          id: "deskripsi",
          condition: "",
          label: "Deskripsi",
          featureName: "deskripsi",
        }
        ,
        {
          id: "bobot",
          condition: "",
          label: "Bobot",
          featureName: "bobot",
        }
        
      ]}
      itemsEvents={[
            <Button
              variant="secondary"
              onClick={() => ubahCPMK()}
            >
              Ubah CPMK
            </Button>
        ,
            <Button
              variant="tertiary"
              onClick={() => hapusCPMK()}
            >
              Hapus
            </Button>
        
      ]}
      itemsModals={[
        
      ]}
    />
  );
};

export default DetailCPMK;
