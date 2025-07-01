import InputBox from "../components/input.component";

const UserAuthForm= ({type}) =>{
    return(
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400ps] ">
            <h1 className="text-4xl font-gelasio capitalize text-center mb-24 ">
                {type =="sign-in"?"welcome back" : "join us today"}
            </h1>
            
            { 
                type != "sign-in" ?
                <InputBox/>
                : ""

            }

            </form>
        </section>
    )
}

export default UserAuthForm;