import { Badge } from './ui/badge'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import React from 'react'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
         <TableCaption>A List of your applied jobs</TableCaption>
         <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {
                [1,2].map((item,index)=>(
                    <TableRow Key={index}>
                        <TableCell>30-08-24</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                    </TableRow>

                ))
            }
         </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
