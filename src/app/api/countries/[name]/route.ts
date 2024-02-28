import {NextResponse} from 'next/server';
import countries from '../../../../../data.json'

export async function GET(request:Request, context:any){
    const {params} = context;
    return NextResponse.json(
        {
            country:countries.find((x:any) =>x.name === params.name) || {} 
        }
    )
}