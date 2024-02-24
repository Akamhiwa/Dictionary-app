import React ,{useEffect, useState}from 'react'

const Nav = () => {
    const[darkMode,setDarkMode]=useState(false)
    const [fontFamily,setFontFamily]=useState("font-sans")
    useEffect(()=>{
        applyFontFamily()
        handleLocalStorage()
        if (localStorage.theme === 'light') {
            setDarkMode(false)
        } else {
            setDarkMode(true)
        }
    },[fontFamily])
    const handleLocalStorage=()=>{
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
    }
    const handleClick=()=>{     
        setDarkMode(!darkMode)
        if(darkMode){
            localStorage.theme='light'
            handleLocalStorage()
        }
        else if(!darkMode){
            localStorage.theme='dark'
            handleLocalStorage()
        }
    }
    const handleChange=(e)=>{
        const newValue=e.target.value
setFontFamily(newValue)
    }
    const applyFontFamily=()=>{
        
           document.body.classList.add(fontFamily)
          const fontClasses=["font-mono","font-sans","font-serif"]
          fontClasses.forEach(classes=>{
            if (classes!==fontFamily)
            document.body.classList.remove(classes);
          })
          
    }
    
  return (
    <div className='  h-[6rem] flex items-center justify-between px-6 md:px-[20%]'>
        <h1 className='font-bold text-xl italic dark:text-slate-200 '>Dictionary</h1>
        <div className='flex items-center justify-center gap-20'>
       <div>
        <select 
        name="select" 
        id="select" 
        onChange={handleChange} 
        value={fontFamily} 
        className='border-0 bg-transparent dark:text-white '>
            <option value="font-sans" className='bg-slate-100 dark:bg-slate-800'>Sans Serif</option>
            <option value="font-serif"className='bg-slate-100 dark:bg-slate-800'>Serif</option>
            <option value="font-mono"className='bg-slate-100 dark:bg-slate-800'>mono</option>
        </select>
       </div>
        <div className='flex items-center justify-center' onClick={handleClick}>
            <button className={`w-[3.5rem] h-[1rem] py-4 flex items-center dark:bg-[#A855F7] bg-slate-300 rounded-full ${darkMode ? 'justify-end':'justify-start'}`}>
                <div className='w-[1.7rem] h-[1.7rem] rounded-full bg-white mx-[0.2rem] flex items-center justify-center'>
                    <img src={darkMode? "src/assets/Dark.png":"src/assets/light.png"} alt="" className='h-5 -rotate-6'/>
                </div>
            </button>
        </div>
        </div>
    </div>
  )
}

export default Nav