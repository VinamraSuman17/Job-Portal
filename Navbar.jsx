import { Popover , PopoverContent, PopoverTrigger} from '../ui/popover';
import { Link } from 'lucide-react';
import React from 'react'
import { Button } from './button';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user = true;
  {/*const {user} = useSelector(store=>store.auth);*/}
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
        <div>
      <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Forage</span></h1>
    </div>
    <div className='flex items-center gap-12'>
        <ul className='flex font-medium items-center gap-5'>
            <a href="/">Home</a>
            <a href="/Jobs">Jobs</a>
            <a href="/Browse">Browse</a>
        </ul>
        {
          !user ?(
            <div className='flex items-center gap-2'>
                                <a href="/login"><Button variant="outline">Login</Button></a>
                                <a href="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></a>
                            </div>
          ): (
            <Popover >
            <PopoverTrigger asChild>
            <Avatar className='cursor-pointer'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='h-10 rounded-full' />
        </Avatar>
          </PopoverTrigger>
               <PopoverContent className="w-80">
              <div className='flex gap-4 space-y-2'>
              <Avatar className='cursor-pointer'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='h-10 rounded-full' />
        </Avatar>
         <div>
         <h4 className='font-medium'>Vinamra Suman</h4>
         <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
         </div>
              </div>
              <div className='flex flex-col gap-3 text-gray-600'>
             <Button variant="link"> <a href="/profile">View Profile</a></Button>
             
              <Button variant="link" className="border-0">Log Out</Button>
    
              </div>
               </PopoverContent>
            </Popover>

          )
        }
       
    </div>
    </div>

        </div>
        
    
  )
}

export default Navbar;
