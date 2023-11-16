import { useDog } from "../Providers/DogProvider"


export const Homepage = () => {
    const {dogs} = useDog();


    return(
        <>
        <div>this is homepage component</div>
        
        {/* !THIS IS A TEST */}

        <div
        style={{
            padding:"5px", margin:"10px 0px"
        }}>
            <div>
                <h1>dog test</h1>
                <div
                className="flex justify-center gap-5">    
                    { dogs && Array.isArray(dogs)  ? (
                        dogs.map((dog, index) => (
                            // if dog.available is true
                            // dont disable
                            // if dog.available is !true
                            // disable card
                                <div key={index}>
                                    <h1>{dog.name}</h1>
                                    <h3>{dog.breed}</h3>
                                    <div>
                                        <p>Is it available?</p>
                                        <p>{dog.available}</p>
                                        <p>Avialble for 8-2pm</p>
                                    </div>
                                    <button>Book now!</button>
                                </div>
                        )) 
                        ) : (
                        <div>theres none</div>
                    )}
                </div>
            </div>
            
            <div>
                
            </div>
        </div>



        </>

    )  
}
