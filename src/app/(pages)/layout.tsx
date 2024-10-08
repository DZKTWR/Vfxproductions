import Navbar2 from "@/components/Navbar2";


export default function Layout ( 
    { children } : { children: React.ReactNode }
){
    return (
        <>
           <Navbar2 />
           {children}
        </>
    )
}