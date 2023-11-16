import { useDog } from "../Providers/DogProvider"


export const Homepage = () => {
    const {dogs} = useDog();

    console.log(dogs, 'dog list')

    return(
        <>
        <div>this is homepage component</div>
        
        {/* !THIS IS A TEST */}

        <div>
            <div>
                <h1>dog test</h1>

                { dogs && Array.isArray(dogs) ? (
                    dogs.map((dog, index) => (
                            <div key={index}>
                                <h1>{dog.name}</h1>
                                <h3>{dog.breed}</h3>
                                <div>
                                    <p>Is it available?</p>
                                    <p>{dog.available}</p>
                                </div>
                            </div>
                    )) 
                    ) : (
                    <div>theres none</div>
                )}
            </div>

        </div>
        </>

    )  
}
