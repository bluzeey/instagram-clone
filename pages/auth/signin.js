import {getProviders,signIn as signIntoProvider} from "next-auth/react"
import Header from '../../components/Header'
function signin({providers}) {
    return (
        <>
           <Header/>
           <div className="flex flex-col items-center justify-center
            min-h-screen py-2 -mt-56 px-14 text-center">
           <img className="w-80" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo-700x394.png"/>
           <div className="mt-4">
           <p>It is not a real app but for educational purposes.</p>
           {Object.values(providers).map((provider)=>(
               <div key={provider.name} className="">
                   <button className="p-3 bg-blue-500 rounded-lg text-white" onClick={()=>signIntoProvider(provider.id, {callbackUrl:'/'})}>
                         Sign in with {provider.name}
                   </button>
               </div>
           ))}
           </div>
           </div>
        </>
    )
}

export async function getServerSideProps(context){
      const providers=await getProviders();
      return{
          props : {
              providers,
          }
      }
}


export default signin
