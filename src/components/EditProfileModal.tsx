import { useEffect, useLayoutEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ToastContainer, toast } from "react-toastify";
interface IFormData {
  username: string;
  name: string;
  location: string;
  biography: string;
}
export default function EditProfileModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    name: "",
    location: "",
    biography: "",
  });
  const updateUser = async () => {};

  const getUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "GET",
    });
    console.log(response);
    if (response.ok) {
      const data: IFormData = await response.json();
      console.log(data);
      setFormData(data);
    } else {
      toast.error("Failed to get user information.");
    }
  };

  useLayoutEffect(() => {
    getUser();

    return () => {};
  }, []);

  return (
    <div className="absolute flex items-center justify-center h-full w-full bg-opacity-40 bg-black   z-40">
      <div className="h-[45rem] w-[40rem] bg-[#1f1f1f] rounded-2xl p-4 ">
        <h3 className="text-center text-xl">Edit Profile</h3>
        <form className="flex flex-col justify-between mt-4 h-full">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={formData.username}
                placeholder="Your awesome title"
                className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={formData.name}
                placeholder="Your awesome title"
                className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                value={formData.location}
                placeholder="Your awesome title"
                className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="lastname">Biography</label>
              <TextareaAutosize
                minRows={2}
                maxRows={6}
                spellCheck={false}
                cacheMeasurements
                value={formData.biography}
                placeholder="Your awesome description"
                className="px-3 py-1.5 bg-[#181818] rounded-lg  outline-none  ring-gray-600 focus:ring-1 text-lg resize-none"
              />
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-12">
            <button
              onClick={() => closeModal()}
              className="flex cursor-pointer  w-fit items-center rounded-md border-2 border-black bg-violet-700 px-8 py-2 font-medium shadow-[4px_4px_0px_0px_#171717] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
              Apply
            </button>
            <button
              className="text-red-500 font-medium"
              onClick={() => closeModal()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
