import { Button } from '@/commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router";
import DetailUser from '../components/DetailUser'
import getUserDetail from '../services/getUserDetail'

const DetailUserPage = (props) => {
	const [user, setUser] = useState()
	const { id } = useParams()

	useEffect(() => {
		const fetchData = async () => {
			const { data: userDetail } = await getUserDetail({ id })
			setUser(userDetail.data)
		}
		fetchData()
  	}, [])

	return user ? (
		<div className="prose max-w-screen-lg mx-auto p-6">
	       	<Link to={`/settings/user`}>
	       	<Button className='absolute z-10 top-24 left-8' variant="secondary">
	       	  Kembali	
	       	</Button>
	       	</Link>
	       	
      		<h2>Detail User</h2>
			<DetailUser {...{ user }} />
		</div>
	) : <></>
}

export default DetailUserPage

