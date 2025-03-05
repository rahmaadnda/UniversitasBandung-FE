/* eslint-disable @typescript-eslint/no-unused-expressions */
/*
	Generated on 22/10/2024 by UI Generator PRICES-IDE
	https://amanah.cs.ui.ac.id/research/ifml-regen
	version 3.5.10
*/
import React, { useEffect, useState, useContext} from 'react'
import { Button, Spinner } from "@/commons/components"
import * as Layouts from '@/commons/layouts';
import { Link, useParams } from "react-router";
import { HeaderContext } from "@/commons/components"
import { useNavigate } from "react-router";
import { useAuth } from '@/commons/auth';
import NilaiTable from "../components/NilaiTable";

import getNilaiMahasiswaDataList from '../services/getNilaiMahasiswaDataList'
import DetailNilaiMahasiswa from '../components/DetailNilaiMahasiswa'
import getPenilaianDataDetail from '../services/getPenilaianDataDetail'
const DetailNilaiMahasiswaPage = props => {
const { checkPermission } = useAuth();

	const [isLoading, setIsLoading] = useState({
	tableNilaiMahasiswa: false,
	detailNilaiMahasiswa: false,

	});
	const { setTitle } = useContext(HeaderContext);

const [nilaiMahasiswaDataList, setNilaiMahasiswaDataList] = useState()
const { id, mahasiswaId } = useParams();

useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(prev => ({...prev, tableNilaiMahasiswa: true}))
				const { data: nilaiMahasiswaDataList } = await getNilaiMahasiswaDataList({ kelasId: id, mahasiswaId })
				setNilaiMahasiswaDataList(nilaiMahasiswaDataList.data)
			} finally {
				setIsLoading(prev => ({...prev, tableNilaiMahasiswa: false}))
			}
		}
		checkPermission("ReadKelasDosenMe") && fetchData()	
  	}, [])
const [penilaianDataDetail, setPenilaianDataDetail] = useState()

useEffect(() => {
	const fetchData = async () => {
		try {
			setIsLoading(prev => ({...prev, detailNilaiMahasiswa: true}))
			const { data: penilaianDataDetail } = await getPenilaianDataDetail({ kelasId: id, mahasiswaId })
			setPenilaianDataDetail(penilaianDataDetail.data)
		} finally {
			setIsLoading(prev => ({...prev, detailNilaiMahasiswa: false}))
		}
	}
	checkPermission("ReadKelasDosenMe") && fetchData()
}, [])

	
	useEffect(() => {
		setTitle("Detail Nilai Mahasiswa Page")
	}, []);
return (
	<Layouts.ViewContainerLayout
		buttons={
			<>
			<Layouts.ViewContainerBackButtonLayout>
			  	<Link to={`/penilaian-kelas/:id
			  	`}>
			  		<Button className="p-4 w-full" variant="secondary">
			  		  Kembali
			  		</Button>
			  	</Link>
			  	
			  	
			  </Layouts.ViewContainerBackButtonLayout>
			  	
			  <Layouts.ViewContainerButtonLayout>
			  	{checkPermission("CreatePenilaian") &&  (
			  	  <Link to={`/penilaian-kelas/:id/nilai/:mahasiswaId/tambah
			  	  `}>
			  	  	<Button className="p-2 w-full" variant="primary">
			  	  	  Tambah/Edit Nilai
			  	  	</Button>
			  	  </Link>
			  	  
			  	)}
			  	
			
			  </Layouts.ViewContainerButtonLayout>
			</>
		}
	>
<Layouts.ListContainerTableLayout
	title={"Table Nilai Mahasiswa"}
	singularName={"Nilai"}
	items={[nilaiMahasiswaDataList]}
	isLoading={isLoading.tableNilaiMahasiswa}
>
	<NilaiTable
		nilaiMahasiswaDataList={nilaiMahasiswaDataList}
		
	/>
</Layouts.ListContainerTableLayout>
<Layouts.DetailContainerLayout
	title={"Detail Nilai Mahasiswa"}
	singularName={"Nilai"}
	items={{...penilaianDataDetail}}
	isLoading={isLoading.detailNilaiMahasiswa}
	isCorrelatedWithAnotherComponent={false}
>
	<DetailNilaiMahasiswa {...{ data : { ...penilaianDataDetail }}} />
</Layouts.DetailContainerLayout>

	</Layouts.ViewContainerLayout>
  )
}
export default DetailNilaiMahasiswaPage

