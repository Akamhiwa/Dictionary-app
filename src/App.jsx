import React ,{useState} from 'react'
import { useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const App = () =>{
    const words = ["light", "music", "wind", "puzzle", "cat", "peace", "sound", "dance", "light", "luck", "umbrella", "magic", "ghost", "soft", "fruit", "bubbly", "space", "joy", "waterfall", "peak"];
    const randomWords=words[Math.floor(Math.random()*words.length)]
    const [query,setQuery]=useState(randomWords)
    const[input,setInput]=useState("")
    const [arrData,setData]=useState([])
    const [error,setError]=useState(false)
    const[loading,setLoading]=useState(true)
    const [audio,setAudio]=useState("")
    const Api_key="https://api.dictionaryapi.dev/api/v2/entries/en/";



    useEffect(() => {
      const fetchApi = async () => {
        try {
          setError(false)
          const resp = await fetch(Api_key + query);
          const data = await resp.json();
          // Handle the fetched data here
            setLoading(false)
            setAudio(query)
            setData(data);
        
        } catch (error) {
          setError(true)

          throw new error("Error fetching data:", error);
        }
      };
    
      fetchApi();
      
    }, [query]);

    const handleChange=(e)=>{ setInput(e.target.value)}
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      setQuery(input)
      setInput('')
    }
   
     const handleAudio=()=>{
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(audio);
      synth.speak(utterance);
     }
      return (
        <div className=' px-5 md:px-[20%] text-black dark:text-white'>
        <form action="" className='w-full h-16  mt-8 rounded-md' onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={input} placeholder='search for a words...' className='w-full h-full bg-slate-200 rounded-md dark:text-white outline-none dark:bg-slate-800 pl-4   focus:border-[.5px] focus:border-[#A855F7] ' />
        </form>
          
            {loading && !error&& 
            
                  <div className='flex justify-center items-center pt-32'>
                      <div
                className="inline-block h-20 w-20  animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                  >Loading...</span
                >
                </div>
                </div>

          }
          {error &&<div className='text-center text-[18px] dark:text-white text-[#39394E] pt-20 font-bold'>
            error occured during fetching data plz check if your connection is stable
            </div>} 
          {arrData.title==="No Definitions Found" && !error &&
          <div className='text-center text-[18px] dark:text-white text-[#39394E] pt-20 font-bold'>
            <p className='mb-7 text-[3rem]'>😥</p>
            <p className='mb-7'>{arrData.message}</p>
            <p className='mb-7'>{arrData.resolution}</p>
            </div>}
            {
             arrData && arrData.title!=="No Definitions Found" && !loading &&
                <>
                  <div className='flex items-center justify-between mt-10 mb-5  h-14'>
          
          <div>
            <h1 className='text-[48px]'>{arrData[0]?.word}</h1>
              <h2 className='text-[#A855F7] ml-1 text-[22px]'>{arrData[0]?.phonetics[0]?.text|| arrData[0]?.phonetics[1]?.text}</h2>
          
            </div>
            <div>
            <PlayArrowIcon className='cursor-pointer'  fontSize='large' onClick={handleAudio}/>
            </div>
        
      </div>
      <div className='flex justify-center gap-3 pt-5 pb-10  flex-col'>
    {
        arrData[0]?.meanings?.map((meaning,index)=>(
            <div key={index} className='flex flex-col'>
                <h1 className='ml-2 mb-[.1rem] text-[24px] font-bold'>{meaning.partOfSpeech}</h1>
                <h2 className='ml-3 text-[18px]'>example</h2>
                <ul className='list-disc ml-6 mt-3'>
                {meaning?.definitions.map((def,item)=>(
                <li key={item} className='text-[16px] mb-1 ml-5'>{def.definition}</li>
            ))} 
              </ul>
            </div>
      ))
    }
          </div>
          <div className='flex items-center justify-center gap-3 flex-col'>
            <div className=' text-bold italic text-[#A855F7] '>new features soon...</div>
        <div className=' text-bold italic pb-8 '>created by <span className='text-[#A855F7]'>akam</span></div>
      </div>
              </>
              
      }
     

          </div>
      )
    }

    export default App