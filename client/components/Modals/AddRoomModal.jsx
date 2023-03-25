import { useState } from 'react';


const AddRoomModal = ({ showModal, closeModal }) => {
    const [name, setName] = useState('');
    // const [showModal, setShowModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: submit the form data to say Hi to the user
        closeModal();
    };

    return (
        <>
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                        &#8203;
                        <div className="inline-block align-bottom bg-[#2d2d39] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <h3 className="text-lg leading-6 font-medium text-white">Create room</h3>
                                    <div className="mt-2">
                                        <form onSubmit={handleSubmit}>
                                            <div className="mb-4">
                                                <label htmlFor="name" className="block text-gray-500 font-bold mb-2">
                                                    What's your room name?
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={(event) => setName(event.target.value)}
                                                    className=" placeholder-[#666d7b] shadow appearance-none border rounded w-full py-2 px-3 text-white bg-[#3e3e4e] border-none leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    onClick={closeModal}
                                                    className="mr-2 py-2 px-4 border  rounded-md   border-[#8C6DFD] text-[#8C6DFD] focus:outline-none focus:shadow-outline-blue focus:border-[#7359d2] active:bg-[#7359d2]"
                                                >
                                                    Discard
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="py-2 px-4 border border-transparent rounded-md text-white bg-[#8C6DFD] hover:bg-[#7359d2] focus:outline-none focus:shadow-outline-blue focus:border-[#7359d2] active:bg-[#7359d2]"
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddRoomModal;
