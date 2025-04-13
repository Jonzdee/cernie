import Link from "next/link";


function Page (){
    return(
        <>
        <h1 className="text-3xl text-center">dashboard Users</h1>
        <ul className="mt-10 text-2xl">
            <li><Link href='/dashboard/users/1'>User 1</Link></li>
            <li><Link href='/dashboard/users/2'>User 2</Link></li>
            <li><Link href='/dashboard/users/3'>User 3</Link></li>

        </ul>
        </>
    )
}
export default Page;