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
import verifyMahasiswa from '../services/verifyMahasiswa'

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const ModifiedFormFormCariMahasiswa = ({ 
 }) => {
  const { 
    control, 
    handleSubmit,
  } = useForm()
  
  
  
  
  
  
  
  const navigate = useNavigate()
  
  const search = (data) => {
    const cleanData = cleanFormData(data)
    verifyMahasiswa({
      ...cleanData,
    })
    .then(({ data: { data } }) => {
      navigate(`/verifikasimahasiswa/detail/${data.}`)
    })
    .catch((error) => {
      console.error(error);
      notifyError(error);
    });
  }
  
  
  return (
	  <Layouts.FormComponentLayout
		  title="Form Cari Mahasiswa" 
		  onSubmit={handleSubmit(search)}
	
	    vas={[
		  ]}
	
		  formFields={[
		  
	
		  ]}
	
		  itemsEvents={[
				<Button key="Search" type="submit" variant="primary">Search</Button>
	    ]}
	  />
  )
}

export default ModifiedFormFormCariMahasiswa
