import React from 'react'



function Soc() {
  return (
    <div className="grid grid-cols-4 gap-6 px-8 py-8 text-stone-300 font-serif">

      <div className="col-span-1">
        <div className="bg-gray-800 rounded-lg p-4">
          <div className=" bg-gray-700 flex justify-center items-center rounded-lg">
            <img src='src/image/soc.jpeg' alt='book cover' className='h-full w-full'></img>


          </div>
          <div className="mt-4 flex justify-center">
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </div>


      <div className="col-span-3 bg-gray-800 rounded-lg p-6 ">
        <h2 className="text-4xl font-bold mb-4">Six Of Crows</h2>
        <p className="text-xl mb-6"><strong>Author:</strong> Leigh Bardugo</p>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Summary:</h3>
          <p className='text-xl'>Criminal prodigy, Kaz Brekker has been offered a chance at a deadly heist: break into the Ice Court - a military stronghold that has never been breached - and retrieve a hostage whose knowledge could change Grisha magic forever. To succeed would mean riches beyond Kaz's wildest dreams, but he can't pull it off alone
          <ul>
            <li>A convict with a thirst for revenge.</li>
            <li>A spy known as the Wraith.</li>
            <li>A sharpshooter who can't walk away from a wager.</li>
            <li>A runaway with a privileged past.</li>
            <li> A runaway with a privileged past.</li>
            <li>A thief with a gift for unlikely escapes.</li>
          </ul>


            Six dangerous outcasts. One impossible heist. Together they might just be unstoppable</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">Main Characters:</h3>
          <ul className="list-disc list-inside text-xl">
            <li>Kaz Brekker</li>
            <li>Inej Ghafa</li>
            <li>Jesper Fahey</li>
            <li>Wylan Van Eck</li>
            <li>Nina Zenik</li>
            <li>Matthias Helvar</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Fav Quotes:</h3>
          <p>- “No mourners. No funerals. Among them, it passed for 'good luck.”</p>
          <p>- “Men mock the gods until they need them, Kaz.”</p>
          <p>- “She'd laughed, and if he could have bottled the sound and gotten drunk on it every night, he would have. It terrified him.”</p>
        </div>
      </div>

      <div className="col-span-4 mt-8 grid grid-cols-3">

        <div className=" rounded-lg p-4 text-center ">
          <div className="  flex justify-center items-center rounded-lg">
            
            <img src="src/image/sixOfCrows.jpeg" alt="Character 1" className="h-full w-full  border-8 border-gray-800 rounded-lg" />
          </div>
          
        </div>

        <div className=" rounded-lg p-4 text-center">
          <div className="  flex justify-center items-center rounded-lg">
          <img src="src/image/goodsoc.png" alt="Character 1" className="h-full w-full border-8 border-gray-800 rounded-lg" />
          </div>
          
        </div>

        <div className=" rounded-lg p-4 text-center">
          <div className=" flex justify-center items-center rounded-lg">
          <img src="src/image/mycrows.png" alt="Character 1" className="h-full w-full border-8 border-gray-800 rounded-lg" />
          </div>
          
        </div>


      </div>

    </div>
  );
}



export default Soc