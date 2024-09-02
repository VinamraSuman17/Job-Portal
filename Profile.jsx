import React, { useState } from 'react'
import Navbar from './ui/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import {  Contact, Mail, Pen } from 'lucide-react'
import { Badge} from './ui/badge'
import { Label } from '@radix-ui/react-label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'

const skills = ["HTML","CSS","JavaScript","ReactJs"];
const isResume = true;
const Profile = () => {
   const [open,setOpen] = useState(false);
   const {user} = useSelector(store=>store.auth);
   
  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
        <Avatar className='h-24 w-24'>
                <AvatarImage className='w-12 object-cover h-1/2 bg-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s"/>
            </Avatar>
            <div>
            <h1 className='font-medium text-xl'>{user?.fullname}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis?</p>

            </div>
           

        </div>
        <Button onClick={()=> setOpen(true)} className="text-right" variant="outline"><Pen/></Button>
            
            
      </div>
      <div>
        <div className='flex items-center gap-3 my-2'>
        <Mail/>
        <span>vinamra@gmail.com</span>
        </div>
        <div className='flex items-center gap-3 my-2'>
        <Contact/>
        <span>8372940264</span>
        </div>    
      </div>
      <div>
        <h1>Skills</h1>
        <div className='flex gap-1'>
        {
          skills.length !=0? skills.map((item,index)=> <Badge Key={index}>{item}</Badge>) : 
          <span>NA</span>
        }
        </div>   
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label className='text-md fnt-bold'>Resume</Label>
        {
          isResume ? <a target='blank' className='text-blue-500 w-full hover:underline cursor-pointer' href="#">vinamra Resume</a>
          :
          <span>NA</span>  
        }

      </div>
     
        </div>
        <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1 className='font-bold m-5 text-lg'>Applied Jobs</h1>
        <AppliedJobTable></AppliedJobTable>
      </div>
  
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile
