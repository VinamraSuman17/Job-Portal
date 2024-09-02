import React from 'react'
import { Button } from './ui/button'
import { Badge} from './ui/badge'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Bookmark } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Job = () => {
   const navigate = useNavigate();
   const jobId = "hkhudbjsbudsh"
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        <div className='flex item-center justify-between'>
        <p>2 Days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
       
        </div>
    
    
     <div className='flex items-center gap-2 my-2'>
     <Button>
        <Avatar>
            <AvatarImage className='w-8 object-cover h-1/2 bg-white' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kjNASp-t4VymZrnRo9hIMRSeTcWNarxbJw&s"/>
        </Avatar>
     </Button>
     <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p>
     </div>
     </div>
     <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate quo libero facilis iste delectus consequuntur quis at ea sit?</p>
     </div>
     <div>
     <Badge className={'text-blue-700 font-bold'} variant="ghost"> 12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost"> Part Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost"> 24LPA</Badge>

     </div>
     <div className='flex items-center gap-2 mt-4'>
     <Button onClick={()=>navigate('/description/${jobId}')}variant="outline">Details</Button>
     <Button className="bg-[#7209b7]">Save for Later</Button>
     </div>
     
    </div>
  )
}

export default Job
