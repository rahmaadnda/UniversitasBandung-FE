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
import updateRencanaStudi from "../services/updateRencanaStudi";

import { notifyError } from "@/commons/utils/toaster";
import * as Layouts from "@/commons/layouts";

const FormPengaturanMasaPengisianIRS = ({ periodePengisianIRS }) => {
  const { control, handleSubmit } = useForm();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const simpan = (data) => {
    const cleanData = cleanFormData({
      mulai: new Date(data.mulai).toISOString(),
      akhir: new Date(data.akhir).toISOString(),
    });

    setIsLoading(true);
    updateRencanaStudi(cleanData)
      .then(({ data: { data } }) => {})
      .catch((error) => {
        console.error(error);
        notifyError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <Layouts.FormComponentLayout
          title="Pengaturan Masa Pengisian IRS"
          onSubmit={handleSubmit(simpan)}
          vas={[]}
          formFields={[
            <Controller
              key="mulai"
              name="mulai"
			  defaultValue={
                periodeData?.mulai === undefined
                  ? ""
                  : new Date(periodeData?.mulai).toISOString().slice(0, -1)
              }
              control={control}
              render={({ field }) => (
                <InputField
                  label="Tanggal Mulai"
                  placeholder="Pilih tanggal mulai pengisian IRS"
                  type="datetime-local"
                  {...field}
                />
              )}
			  rules={{ required: true }}
            />,

            <Controller
              key="akhir"
              name="akhir"
			  defaultValue={
                periodeData?.akhir === undefined
                  ? ""
                  : new Date(periodeData?.akhir).toISOString().slice(0, -1)
              }
              control={control}
              render={({ field }) => (
                <InputField
                  label="Tanggal Akhir"
                  placeholder="Pilih tanggal akhir pengisian IRS"
                  type="datetime-local"
                  {...field}
                />
              )}
			  rules={{ required: true }}
            />,
          ]}
          itemsEvents={[
            <Button key="Simpan" type="submit" variant="primary">
              Simpan
            </Button>,
          ]}
        />
      )}
    </>
  );
};

export default FormPengaturanMasaPengisianIRS;
