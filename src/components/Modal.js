import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

function Modal({ children, title }) {
	return (
		<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			</Transition.Child>

			{/* This element is to trick the browser into centering the modal contents. */}
			<span
				className="hidden sm:inline-block sm:align-middle sm:h-screen"
				aria-hidden="true"
			>
				&#8203;
			</span>
			<Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				enterTo="opacity-100 translate-y-0 sm:scale-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100 translate-y-0 sm:scale-100"
				leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			>
				<div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
					<div className="sm:flex sm:items-start">
						<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<Dialog.Title
								as="h3"
								className="text-lg leading-6 font-medium text-gray-900"
							>
								{title}
							</Dialog.Title>
							<div className="mt-2">
								<div className="text-sm text-gray-500">
									{/* text */}
									<p className="text-sm text-red-500"></p>
								</div>
							</div>
						</div>
					</div>
					{children}
				</div>
			</Transition.Child>
		</div>
	);
}

export default Modal;
