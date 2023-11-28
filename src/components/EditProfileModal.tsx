import { areObjectsEqual, nullToEmptyString, streamToJson } from "@/lib/utils";
import { useEffect, useLayoutEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IFormData {
  [key: string]: any;
  username: string;
  name: string;
  location: string;
  bio: string;
}

interface IData {
  pk: number;
  id: string;
  bio: string;
  location: string;
  username: string;
  name: string;
  email: string;
  emailVerified: string;
  image: string;
}
export default function EditProfileModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [initialData, setInitialData] = useState<IFormData>({
    username: "",
    name: "",
    location: "",
    bio: "",
  });
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    name: "",
    location: "",
    bio: "",
  });

  const updateUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "PATCH",
      body: JSON.stringify(formData),
    });
    console.log(await streamToJson(response.body));

    if (response.ok) {
      toast("Updated user data successfully.", {
        position: "bottom-center",
        type: "success",
        theme: "dark",
      });
      closeModal();
    } else {
      toast("Failed to update user information.", {
        position: "bottom-center",
        type: "error",
        theme: "dark",
      });
    }
  };

  const getUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "GET",
    });

    if (response.ok) {
      const data: IData = await response.json();
      console.log(data);
      setInitialData({
        username: data.username,
        name: data.name,
        bio: data.bio,
        location: data.location,
      });
      setFormData({
        username: data.username,
        name: data.name,
        bio: data.bio,
        location: data.location,
      });
    } else {
      toast("Failed to load user information.", {
        position: "bottom-center",
        type: "error",
        theme: "dark",
      });
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-between mt-4 h-full"
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                value={nullToEmptyString(formData.username)}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                placeholder="Your awesome username"
                className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                placeholder="Your awesome name"
                className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="location">Location</label>
              <input
                id="location"
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                value={formData.location}
                placeholder="Your awesome location"
                className="h-12 w-full px-3 py-1.5 bg-[#181818]  rounded-lg outline-none ring-gray-600 focus:ring-1 text-lg"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="bio">Biography</label>
              <TextareaAutosize
                id="bio"
                minRows={2}
                maxRows={4}
                spellCheck={false}
                cacheMeasurements
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                value={formData.bio}
                placeholder="Your awesome bio"
                className="px-3 py-1.5 bg-[#181818] rounded-lg  outline-none  ring-gray-600 focus:ring-1 text-lg resize-none"
              />
            </div>
          </div>
          <div className="flex flex-row gap-8 mb-12">
            <button
              onClick={() =>
                !areObjectsEqual(formData, initialData) && updateUser()
              }
              className={`${
                areObjectsEqual(formData, initialData)
                  ? "cursor-not-allowed bg-transparent "
                  : "bg-violet-700 transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
              } flex cursor-pointer w-fit items-center rounded-md border-2 border-black  px-8 py-2 font-medium shadow-[4px_4px_0px_0px_#171717] `}
            >
              Apply
            </button>
            <button
              className="text-red-500 font-medium hover:underline "
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
