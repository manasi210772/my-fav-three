import React from 'react'

function Harry() {
  return (
    <div className="grid grid-cols-4 gap-6 px-8 py-8 text-stone-300 font-serif">
      
      
      <div className="col-span-1">
        <div className="bg-green-950 rounded-lg p-4">
          <div className="  flex justify-center items-center rounded-lg">
            
            <img src='src/image/Harry.jpeg' alt='bookcover'/>
          </div>
          <div className="mt-4 flex justify-center">
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

      
      <div className="col-span-3 bg-green-950 rounded-lg p-6 ">
        <h2 className="text-4xl font-bold mb-4">Harry Potter <i className='text-lg font-extralight'>(The whole series)</i></h2>
        <p className="text-xl mb-6"><strong>Author:</strong>J.K. Rowling</p>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Summary:</h3>
          <p className='text-xl'>In a world where magic exists just out of sight, a young boy discovers he’s not as ordinary as he once thought. Then Invited to Hogwarts, a school for witches and wizards, he learns about friendship, bravery, and the hidden dangers of the wizarding world. As dark forces rise, he becomes entangled in a battle far greater than himself.</p>
          <p className='text-xl'>The message at the heart of this book stays: that choice matters much more than destiny, and that love will always triumph over death.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Main Characters:</h3>
          <ul className="list-disc list-inside text-xl">
            <li>Harry Potter</li>
            <li>Ron Weasley</li>
            <li>Hermione Granger</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Fav Quotes:</h3>
          <p>- “Lily... After all this time?”</p>
          <pre className='font-serif'>   “Always”</pre>
          <p>- "Dobby is free."</p>
          <p>- "things we lose have a way of coming back to us in the end. If not always in the ways we expect"</p>
        </div>
      </div>

      <div className="col-span-4 mt-8 grid grid-cols-3 gap-4 ">
        
        <div className=" rounded-lg p-4 text-center ">
          <div className="  flex justify-center items-center rounded-lg ">
            
            <img src="src/image/hogwarts.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-green-950" />
          </div>
          
        </div>

        <div className=" rounded-lg p-4 text-center">
          <div className="  flex justify-center items-center rounded-lg ">
          <img src="src/image/library.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-green-950" />
          </div>
          
        </div>

        <div className=" rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center rounded-lg">
          <img src="src/image/slytherin.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-green-950" />
          </div>
          
        </div>
        <div className=" rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center rounded-lg">
          <img src="src/image/trio.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-green-950" />
          </div>
          
        </div>
        <div className=" rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center rounded-lg">
          <img src="src/image/nighthogwarts.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-green-950" />
          </div>
          
        </div>
        <div className=" rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center rounded-lg">
          <img src="src/image/riddle.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-green-950" />
          </div>
          
        </div>
        
      </div>

    </div>
  );
}

export default Harry