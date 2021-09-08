export default function Project({name, techStack, link}) {
   return (
      <div className="py-4">
         <div className="flex space-x-2">  
            {techStack.map((name)=> (
               <span className="text-sm bg-gray-200 px-2 py-1 rounded">
                  {name}
               </span>
            ))}
         </div>  
         <h5 className="text-lg my-2">
            {name}
         </h5>
         <div className="flex space-x-2">  
            <a 
               className="hover:bg-yellow-200 px-2 py-1 rounded" 
               target="_blank" 
               href={link.demo}
            >
               🚀 Live
            </a>
            <a 
               className="hover:bg-yellow-200 px-2 py-1 rounded" 
               target="_blank" 
               href={`https://github.com/toufiqnuur/${link.source}`}
            >
               📝 Source
            </a>
         </div>  
      </div>
   )
}