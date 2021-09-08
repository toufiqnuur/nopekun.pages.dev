import Head from 'next/head'
import Project from '../components/Project'
import Section from '../components/Section'

export default function Home() {
   return (
      <>
         <Head>
            <title>Portfolio: Toufiq Nuur Rahman</title>
            <meta name="description" content="Hi! My name is Toufiq Nuur Rahman and i'm a front end web developer." />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
         </Head>
         
         <div className="container mt-8 md:mt-32">
           
            <div className="mb-16 md:mb-24">
               <h1 className="text-2xl md:text-3xl font-semibold mb-3">👋 Hi, Iam Toufiq Nuur Rahman</h1>
               <p className="md:text-xl mb-6">I&apos;m a front end web developer mostly work with JavaScript.</p>
           </div>  
            
            
            <Section title="🛠️ Skills">
               <ul className="list-disc list-inside">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Tailwind Css</li>
                  <li>Bootstrap</li>
                  <li>JS</li>
                  <li>TypeScript: Beginner</li>
                  <li>SvelteKit: Intermediate</li>
                  <li>VueJs: Beginner</li>
                  <li>NextJs: Beginner</li>
               </ul>
            </Section>
            
            
            <Section title="📂 Projects">
               <div className="flex flex-col divide-y divide-gray-200">  
                  <Project 
                     name="Skanesga : Redesign SMK N 1 Seyegan official website" 
                     techStack={['SvelteKit','Tailwind Css']} 
                     link={{
                        demo: 'https://skanesga.vercel.app',
                        source: 'skanesga'
                     }}
                   />
                  <Project 
                     name="Ngaji : Online Quran app complete with audio, transliteration and translation" 
                     techStack={['SvelteKit','Tailwind Css']} 
                     link={{
                        demo: 'https://ngaji-opal.vercel.app',
                        source: 'ngaji'
                     }}
                  />
                  <Project 
                     name="Anihub : Simple anime search app"
                     techStack={['Webpack','Bootstrap']}
                     link={{
                        demo: 'https://anihub.vercel.app',
                        source: 'anihub'
                     }}
                  />
               </div>  
            </Section>
      
      
            <Section title="☎️ Contacts">
               <ul className="list-disc list-inside">
                  <li>Email : <a target="_blank" rel="noreferrer" href="mailto:taufik2017yk@gmail.com">taufik2017yk@gmail.com</a></li>
                  <li>Instagram : <a target="_blank" rel="noreferrer" href="https://instagram.com/nope.kun">nope.kun</a></li>
               </ul>
            </Section>
         </div>  
      </>
  )
}
