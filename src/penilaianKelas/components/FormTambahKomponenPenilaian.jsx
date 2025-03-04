/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  RichTextField,
  VisualizationAttr,
  Spinner,
  
} from "@/commons/components";
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from "@/commons/constants/allowedPermission";
import cleanFormData from "@/commons/utils/cleanFormData";
import saveKomponenPenilaian from '../services/saveKomponenPenilaian'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormTambahKomponenPenilaian = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  const { id } = useParams();
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveKomponenPenilaian({
      ...cleanData,
	  kelasId: id,
    })
    .then(({ data: { data } }) => {
     navigate(`/penilaian-kelas/${id}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah Komponen Penilaian" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="nama"
		        name="nama"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Nama Komponen"
		            placeholder="Masukkan nama komponen"
		            defaultValue={field.nama}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="bobot"
		        name="bobot"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Bobot"
		            placeholder="Masukkan bobot"
		            defaultValue={field.bobot}	            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  ]}
	
		  itemsEvents={[
				<Button key="Tambah" type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
  )
}

export default FormTambahKomponenPenilaian
