import React, { useEffect, useState } from 'react';
import Modal1 from './ModalA';

const Problem2 = () => {
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(true);
	const [isEven, setIsEven] = useState(false);

	const handleClose = () => {
		setShow(false);
	};
	const handleShow = (us) => {
		setShow(true);

		if (us) {
			getContacts('us');
		} else {
			getContacts();
		}
	};
	const [data, setData] = useState([]);

	const getContacts = async (us) => {
		try {
			const res = await fetch(
				'https://contact.mediusware.com/api/contacts/?page_size=600'
			);
			const result = await res.json();
			if (us) {
				const filteredResult = result.results?.filter(
					(item) => item.country.name === 'United States'
				);

				setData(filteredResult);
			} else {
				setData(result?.results);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {}, []);

	return (
		<div className='container'>
			<div className='row justify-content-center mt-5'>
				<h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

				<div className='d-flex justify-content-center gap-3'>
					<button
						className='btn btn-lg btn-outline-primary'
						type='button'
						class='btn btn-primary'
						onClick={handleShow}
					>
						All Contacts
					</button>
					<button
						onClick={() => handleShow('us')}
						className='btn btn-lg btn-outline-warning'
						type='button'
					>
						US Contacts
					</button>
				</div>
			</div>
			<Modal1
				handleShow={handleShow}
				handleClose={handleClose}
				show={show}
				setShow={setShow}
				data={data}
				getContacts={getContacts}
				setData={setData}
				loading={loading}
				setLoading={setLoading}
				setIsEven={setIsEven}
			/>
		</div>
	);
};

export default Problem2;
