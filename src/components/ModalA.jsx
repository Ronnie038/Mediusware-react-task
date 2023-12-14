import React, { useState } from 'react';

function Modal1({
	handleShow,
	handleClose,
	show,
	setShow,
	data,
	getContacts,
	setData,
	loading,
	setLoading,
}) {
	const [isIven, setIsIven] = useState(false);

	return (
		<div>
			<div
				className={`modal fade ${show ? 'show d-block' : 'd-none'}`}
				onClick={handleClose}
			>
				<div className='modal-dialog' onClick={(e) => e.stopPropagation()}>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>
								<div>
									<button
										onClick={() => {
											setLoading(true);
											getContacts();
										}}
										className='mt-4 mx-2'
										style={{ backgroundColor: '#46139f', color: 'white' }}
									>
										ModalA
									</button>
									<button
										onClick={() => {
											setLoading(true);
											getContacts('us');
										}}
										className='mx-2'
										style={{ backgroundColor: '#ff7f50' }}
									>
										ModalB
									</button>
								</div>
							</h5>
							<button
								type='button'
								className='close'
								onClick={() => {
									handleClose();
									setData([]);
									setLoading(true);
								}}
							>
								<span style={{ borderColor: '#46139f' }}>ModalC</span>
							</button>
						</div>
						<div
							className='modal-body '
							style={{ maxHeight: '600px', overflow: 'scroll' }}
						>
							{loading ? (
								'loading'
							) : (
								<table className='table table-striped '>
									<thead>
										<tr>
											<th scope='col'>Id</th>
											<th scope='col'>Country</th>
										</tr>
									</thead>
									<tbody>
										{data?.map((contact, index) => (
											<tr key={index}>
												<td>{contact?.id}</td>
												<td>{contact?.country?.name}</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</div>
						<div className='modal-footer'>
							<div>
								<label htmlFor='even' className='btn'>
									Only even
								</label>
								<input
									type='checkbox'
									name=''
									onChange={(e) => setIsIven(e.target.checked)}
									id='even'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal1;
