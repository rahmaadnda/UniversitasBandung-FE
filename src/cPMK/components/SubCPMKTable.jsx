/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React from "react";
import { Link, useNavigate, useParams } from "react-router";

import { useAuth } from "@/commons/auth";
import { Button, Modal } from "@/commons/components";

import deleteCPMK from "../services/deleteCPMK";

import * as Layouts from "@/commons/layouts";

const SubCPMKTable = ({ dataSubCPMK }) => {
  const { checkPermission } = useAuth();

  const [showModalKonfirmasiHapusCPMK, setShowModalKonfirmasiHapusCPMK] =
    React.useState(false);
  const hapus = async (subCPMK) => {
    await deleteCPMK({});
    window.location.reload(false);
  };

  return (
    <Layouts.ListComponentTableLayout
      items={[dataSubCPMK]}
      itemsAttrs={[
        {
          id: "kode",
          condition: "isHeading",
          label: "Kode",
          featureName: "kode",
        },
        {
          id: "nama",
          condition: "isHeading",
          label: "Nama",
          featureName: "nama",
        },
        {
          id: "deskripsi",
          condition: "isHeading",
          label: "Deskripsi",
          featureName: "deskripsi",
        },
        {
          id: "bobot",
          condition: "isHeading",
          label: "Bobot",
          featureName: "bobot",
        },
        {
          id: "cPL",
          condition: "isHeading",
          label: "CPL",
          featureName: "parentCPMKCplName",
        },
        {
          id: "mataKuliah",
          condition: "isHeading",
          label: "Mata Kuliah",
          featureName: "parentCPMKMataKuliahNama",
        },
      ]}
    />
  );
};

export default SubCPMKTable;
