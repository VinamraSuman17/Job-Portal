
import { Dialog, DialogHeader,DialogContent, DialogTitle, DialogFooter } from './ui/dialog'
import React, { useState } from 'react'
import { Label } from '@radix-ui/react-label'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/authSlice';

const UpdateProfileDialog = ({open,setOpen}) => {
  const [loading,setloading] = useState(false);
  const {user} = useSelector(store=>store.auth);

  const [input,setInput]= useState({
    fullname:user?.fullname,
    email:user?.email,
    phoneNumber:user?.phoneNumber,
    bio:user?.bio,
    skills:user?.profile?.skills?.map(skill=>skill),
  });
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({...input,[e.target.name]:e.target.value});
  }

  
  const submitHandler = async (e)=>{
    e.preventDefault();
    formData.append("fullname",input.fullname);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formdata.append("bio",input.bio);
    formData.append("skills",input.skills);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`,formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        },
        withCredentials:true
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.nessage)
    }
    setOpen(false);

    console.log(input);
  }
  
  return (
    <div>
      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]" onInteractOutside={()=>setOpen(false)}>
            <DialogHeader>
                <DialogTitle>Update Profile</DialogTitle>
            </DialogHeader>
            <form onSubmit={submitHandler}>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="name" className='text-right'>Name</Label>
                    <input type="text"
                    id="name"
                    name="name"
                    value={input.fullname}
                    onChange={changeEventHandler}
                    className='col-span-3'
                    />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="email" className='text-right'>Email</Label>
                    <input type="email"
                    id="email"
                    name="email"
                    value={input.email}
                    onChange={changeEventHandler}
                    className='col-span-3'
                    />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="number" className='text-right'>Number</Label>
                    <input 
                    id="number"
                    name="number"
                    value={input.phoneNumber}
                    onChange={changeEventHandler}
                    className='col-span-3'
                    />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="bio" className='text-right'>Bio</Label>
                    <input 
                    id="bio"
                    name="bio"
                    value={input.bio}
                    onChange={changeEventHandler}
                    className='col-span-3'
                    />
                    </div>
                    <div className='grid grid-cols-4 items-center gap-4'>
                    <Label htmlFor="skills" className='text-right'>Skills</Label>
                    <input 
                    id="skills"
                    name="skills"
                    value={input.skills}
                    onChange={changeEventHandler}
                    className='col-span-3'
                    />
                    </div> 
                </div>
                <DialogFooter>
                  {
                    loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/>Please wait</Button> :
                    <Button type="submit" className="w-full my-4">Update</Button>
            
                  }
                </DialogFooter>

            </form>
        </DialogContent>

      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog
