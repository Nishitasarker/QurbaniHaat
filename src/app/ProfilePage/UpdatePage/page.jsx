"use client";
import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { 
  Button, 
  Card, 
  Input, 
  TextField, 
  Label, 
  FieldError 
} from "@heroui/react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateProfile() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async () => {
    if (!name || !image) {
      toast.warn("Please fill in all fields");
      return;
    }

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile");
    } else {
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        router.push("/ProfilePage"); 
        router.refresh();
      }, 1000);
    }
  };

  if (!session) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <ToastContainer />
      <Card className="p-8 max-w-md w-full shadow-2xl border-t-4 border-green-500">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Profile</h2>
        
        <div className="flex flex-col gap-5">
          
       
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input 
              placeholder="Enter your name" 
              className="w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FieldError />
          </TextField>
          
     
          <TextField isRequired name="image" type="text">
            <Label>Photo URL</Label>
            <Input 
              placeholder="Photo URL" 
              className="w-full min-w-full"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <FieldError />
          </TextField>

          <div className="flex gap-3 mt-4">
            <Button 
              className="flex-1 font-semibold" 
              color="danger" 
              variant="flat"
              onClick={() => router.back()}
            >
              Cancel
            </Button>

            <Button 
              className="flex-1 font-semibold text-white bg-green-500 hover:bg-green-600" 
              onClick={handleUpdate}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}