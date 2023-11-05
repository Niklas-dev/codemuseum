import Image from "next/image";
export default function ProfilePictureDisplay({ image }: { image: string }) {
  return (
    <Image
      className=" h-12 w-12 rounded-full bg-gray-600  "
      src={image}
      width={50}
      height={50}
      alt="avatar"
    />
  );
}
