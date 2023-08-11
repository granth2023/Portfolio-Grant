import Image from "next/image"; 
import { client } from "../lib/sanity"; 

interface Data { 
    title: string;
    overview: string;
    link: string;
    _id: string;
    imageUrl: string;
}