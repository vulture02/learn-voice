"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { subjects } from '@/constants'

import { useRouter, useSearchParams } from 'next/navigation';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import React ,{ useEffect, useState } from 'react';

const SubjectFilter = () => {
    const router=useRouter();
    const searchParams=useSearchParams();
    const query=searchParams.get("subject") || "";
    const [subject,setSubject]=useState(query);
    useEffect(()=>{
        let newUrl="";
        if(subject ==="all"){
            newUrl=removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["subject"],
            })
        }else{
            newUrl =formUrlQuery({
                params:searchParams.toString(),
                key: "subject",
                value: subject,

            });

        }
        router.push(newUrl,{scroll:false });
    },[subject])
  return (
    <Select  onValueChange={setSubject} value={subject} defaultValue={subject}>
        <SelectTrigger  className='input capitalize mt-9'>
            <SelectValue placeholder="subject"/>
        </SelectTrigger>
        <SelectContent>
            <SelectItem value='all'>
                All Subjects
            </SelectItem>
            {subjects.map((subject)=>(
                <SelectItem key={subject} value={subject} className='capitalize'>
                    {subject}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
  )
}

export default SubjectFilter