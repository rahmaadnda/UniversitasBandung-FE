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
import saveCPL from '../services/saveCPL'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormTambahCPL = ({ 
	kurikulum
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const tambah = (data) => {
    const cleanData = cleanFormData(data)
    saveCPL({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/cpl`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Tambah CPL" 
		  onSubmit={handleSubmit(tambah)}
	
	    vas={[
		  ]}
	
		  formFields={[
			  
			  <Controller
			    key="kode"
		        name="kode"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Kode"
		            placeholder="Masukkan kode"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
	,
			  
			  <Controller
			    key="deskripsi"
		        name="deskripsi"
		        control={control}
		        render={({ field, fieldState }) => (
				  <InputField
		            label="Deskripsi"
		            placeholder="Masukkan deskripsi"
		            fieldState={fieldState}
					{...field}
					isRequired={false}
		          />
		        )}
		      />
		  ,
	
		  
		  <Controller
		    key="kurikulumId"
	        name="kurikulumId"
	        control={control}
	        render={({ field, fieldState }) => (
					<SelectionField
				
	            label="Pilihan Kurikulum"
	            options={kurikulum}
	            placeholder="Masukkan pilihan kurikulum"
					fieldState={fieldState}
	            {...field}
					isRequired={false}
	          />
	        )}
	      />
		  ]}
	
		  itemsEvents={[
				<Button key="Tambah" type="submit" variant="primary">Tambah</Button>
	    ]}
	  />
  )
}

export default ModifiedFormTambahCPL
