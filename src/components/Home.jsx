import React from 'react'
import Quotes from './Quotes'

function Home() {
    return (
        <div className='grid grid-rows-2 grid-flow-col gap-8 px-6 mt-6 text-2xl pr-10  text-stone-300 font-serif' >
            <div className='bg-green-900 col-span-3 row-span-2 h-fit rounded-2xl px-3 py-3'>
                <div className='px-7 py-4 flex justify-center m-4'> 
                <Quotes />
                </div>
                <br></br>

                <h2 className='px-8 pt-5 font-bold text-3xl'>hello, this is Tejashri!!</h2>
                <br></br>

                <div className='px-8 py-4' >

                    <p>
                        This site is all about my <i>love</i> for reading. Story books and novels are a treasured companion in my free hours. Offering me an enchanting escape into realms of varied worlds, ideas, and perspectives that broaden both my mind and soul.
                    </p>
                    <br></br>
                    <p>
                        Books are like windows into lives we’ll never live, yet somehow they feel familiar. It’s like breathing in stardust, a way to feel alive in a thousand different worlds. They let you slip into someone else’s mind, feeling their thoughts, their fears, their joys, walking in their shoes as if they were mine.
                    </p>
                    <br></br>
                    <br></br>

                    <p>Some of my fav Genre: <ul className='px-10' >
                        <li className='flex justify-start'> 1. Fiction</li>
                        <li className='flex justify-start'>2. Mystery</li>
                        <li className='flex justify-start'>3. Dark Academia tradegy</li>
                        <li className='flex justify-start'>4. Found Family/Fantasy</li>

                        </ul>
                    </p>
                    <br></br>
                    <br></br>
                    <p>Some of my fav youtubers: <ul className='px-10' >
                        <li className='flex justify-start'> 1. The Book Leo- Leonie</li>
                        <li className='flex justify-start'>2. Haley Pham- Haley</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='  rounded-2xl  px-2 '>
                <img src="src/image/me.png" alt="me" className="h-full w-full columns-2 row-span-1 rounded-lg border-4 border-green-900" />
            </div>
            <div className='  rounded-2xl  px-2'>
                <img src="src/image/mainlib.jpeg" alt="me" className="h-full w-full columns-2 row-span-1 rounded-lg border-4 border-green-900" />
            </div>
        </div>
    )
}

export default Home