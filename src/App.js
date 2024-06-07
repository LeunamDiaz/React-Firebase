import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function App() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [born, setBorn] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyCrdtAkDsMY29idvt85BwQ5KSgVlraaEfk",
    authDomain: "beezafe.firebaseapp.com",
    databaseURL: "https://beezafe-default-rtdb.firebaseio.com",
    projectId: "beezafe",
    storageBucket: "beezafe.appspot.com",
    messagingSenderId: "258666659584",
    appId: "1:258666659584:web:0035bc6d5dc80055503de5",
    measurementId: "G-DCQTDEWYQW"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: first,
        last: last,
        born: parseInt(born) // Asegúrate de convertir el año a un número si es necesario
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    // Limpiar los campos del formulario después de enviar los datos
    setFirst("");
    setLast("");
    setBorn("");
  };

  return (
    <div class="h-screen md:flex">
      <div class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
          <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
          <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
        </div>
        <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form class="bg-white" onSubmit={handleFormSubmit}>
          <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
          <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input class="pl-2 outline-none border-none" type="text" placeholder="First Name" value={first} onChange={(e) => setFirst(e.target.value)} />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input class="pl-2 outline-none border-none" type="text" placeholder="Last Name" value={last} onChange={(e) => setLast(e.target.value)} />
          </div>
          <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <input class="pl-2 outline-none border-none" type="text" placeholder="Year Born" value={born} onChange={(e) => setBorn(e.target.value)} />
          </div>
          <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;