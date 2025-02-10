import Link from 'next/link';
import { New } from '@/types/definition'
import { NewComponent } from '../../NewComponent';


export function ListNews ( { data }: { data: New[]} ) {
    return (
        <div className='space-y-1.5'>
            {
                data.map((item) => {
                    return (
                        <Link key={item.id} href='#'>
                            <NewComponent item={item}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}