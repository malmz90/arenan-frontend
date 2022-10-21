import Modal from './Modal';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function ConfirmItemModal({
	modalOpen,
	setModalOpen,

	selectedItem,
	setSelectedItem,
	handleBuyItem,
}) {
	let title = selectedItem ? selectedItem.name : 'no item';

	return (
		<Transition.Root show={modalOpen} as={Fragment}>
			<Dialog
				as="div"
				className="fixed z-10 inset-0 overflow-y-auto"
				onClose={setModalOpen}
			>
				<Modal
					addOpen={modalOpen}
					setAddOpen={setModalOpen}
					title={title}
				>
					{selectedItem && (
						<div>
							Are you sure you want to buy {selectedItem.name} for{' '}
							{selectedItem.price} gold
						</div>
					)}

					<div>
						<button
							type="button"
							className="ml-2 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
							onClick={() => {
								setModalOpen(false);
								setSelectedItem([]);
							}}
						>
							Cancel
						</button>
						<button
							onClick={() => {
								handleBuyItem();
							}}
							className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
						>
							Buy
						</button>
					</div>
				</Modal>
			</Dialog>
		</Transition.Root>
	);
}

export default ConfirmItemModal;
