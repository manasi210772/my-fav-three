import React from 'react'

function Shistory() {
  return (
    <div className="grid grid-cols-4 gap-6 px-8 py-8 text-stone-300 font-serif">
      
      
      <div className="col-span-1">
        <div className="bg-orange-950 rounded-lg p-4">
          <div className="  flex justify-center items-center rounded-lg">
            <img src='src/image/shist.jpeg' alt='cover' className='h-full w-full'/>
          </div>
          <div className="mt-4 flex justify-center">
            <p>⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>

    
      <div className="col-span-3 bg-orange-950 rounded-lg p-6 ">
        <h2 className="text-4xl font-bold mb-4">The Secret History</h2>
        <p className="text-xl mb-6"><strong>Author:</strong> Donna Tartt</p>
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Summary:</h3>
          <p className='text-xl'>Under the influence of their charismatic classics professor, a group of clever, eccentric misfits at an elite New England college discover a way of thinking and living that is a world away from the humdrum existence of their contemporaries. But when they go beyond the boundaries of normal morality they slip gradually from obsession to corruption and betrayal, and at last—inexorably—into evil.</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Main Characters:</h3>
          <ul className="list-disc list-inside text-xl">
            <li>Richard Papen</li>
            <li>Henry Winter</li>
            <li>Camilla Macaulay</li>
            <li>Charles Macaulay</li>
            <li>Francis Abernathy</li>
            <li>Edmund Corcoran</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Fav Quote:</h3>
          <p>- “Beauty is terror. Whatever we call beautiful, we quiver before it.””</p>
          <p>- “I am nothing in my soul if not obsessive.”</p>
          <p>- “When you're worried about something,' said Henry abruptly, 'have you ever tried thinking in a different language?”</p>
        </div>
      </div>

      <div className="col-span-4 mt-8 grid grid-cols-3 gap-4 ">
        
        <div className=" rounded-lg p-4 text-center ">
          <div className="  flex justify-center items-center ">
            <img src="src/image/secret.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-orange-950"  />
          </div>
          
        </div>

        <div className=" rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center ">
          <img src="src/image/secret2.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-orange-950" />
          </div>
          
        </div>

        <div className="rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center ">
          <img src="src/image/secret3.jpeg" alt="Character 1" className="h-full w-full  rounded-lg border-8 border-orange-950" />
          </div>
          <p className="mt-2">Character 3</p>
        </div>

        
      </div>

    </div>
  );
}

export default Shistory