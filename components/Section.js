export default function Section({title, children}) {
   return (
      <div className="mb-16 md:mb-24">
         <h3 className="text-xl md:text-2xl font-semibold mb-5">
            {title}
         </h3>
         {children}
      </div>
   )
}