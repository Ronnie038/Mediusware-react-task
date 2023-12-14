import React, { useState } from 'react';

const Problem1 = () => {
	const [show, setShow] = useState('all');

	const [formData, setFormData] = useState({});
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	const handleClick = (val) => {
		setShow(val);
		setFilteredData(data.filter((ele) => ele.status === val));
		if (val == 'all') {
			setFilteredData(sortedData(data));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setData((prev) => [...prev, formData]);
		if (formData?.status === show) {
			setFilteredData([...filteredData, formData]);
		}
		if (show == 'all') {
			setFilteredData((prev) => sortedData([...data, formData])); // sending new data with old data to for sorting
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const sortedData = (givenData) => {
		let sortedArray = [...givenData]?.sort((a, b) => {
			if (a.status === 'active' && b.status !== 'active') {
				return -1;
			}
			if (a.status !== 'active' && b.status === 'active') {
				return 1;
			}
			if (a.status === 'completed' && b.status !== 'completed') {
				return -1;
			}
			if (a.status !== 'completed' && b.status === 'completed') {
				return 1;
			}
			return 0;
		});

		return sortedArray;
	};

	return (
		<div className='container'>
			<div className='row justify-content-center mt-5'>
				<h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
				<div className='col-6 '>
					<form
						onSubmit={handleSubmit}
						className='row gy-2 gx-3 align-items-center mb-4'
					>
						<div className='col-auto'>
							<input
								onChange={handleInputChange}
								type='text'
								name='name'
								className='form-control'
								placeholder='Name'
								required
							/>
						</div>
						<div className='col-auto'>
							<input
								type='text'
								name='status'
								className='form-control'
								placeholder='Status'
								onChange={handleInputChange}
								required
							/>
						</div>
						<div className='col-auto'>
							<button type='submit' className='btn btn-primary'>
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className='col-8'>
					<ul className='nav nav-pills mb-3' id='pills-tab' role='tablist'>
						<li className='nav-item'>
							<button
								className={`nav-link ${show === 'all' && 'active'}`}
								type='button'
								onClick={() => handleClick('all')}
							>
								All
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={`nav-link ${show === 'active' && 'active'}`}
								type='button'
								onClick={() => handleClick('active')}
							>
								Active
							</button>
						</li>
						<li className='nav-item'>
							<button
								className={`nav-link ${show === 'completed' && 'active'}`}
								type='button'
								onClick={() => handleClick('completed')}
							>
								Completed
							</button>
						</li>
					</ul>
					<div className='tab-content'></div>
					<table className='table table-striped '>
						<thead>
							<tr>
								<th scope='col'>Name</th>
								<th scope='col'>Status</th>
							</tr>
						</thead>
						<tbody>
							{filteredData?.map((elem, index) => (
								<tr key={index}>
									<td>{elem?.name}</td>
									<td>{elem?.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Problem1;
