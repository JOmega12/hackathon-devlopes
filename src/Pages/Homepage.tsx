

export const Homepage = () => {


    return(
        <>
             <div className="bg-yellow 200 h-1100 w-1140 mx-auto">
    <h1 className="relative text-4xl font-semibold text-orange-600 ml-12 pt-8">Pookie's Paws Dog Cafe</h1>

  <div className="about" id="about">
    <div className="about-image">
        <img> src="Asset/Maitre De.png" alt="Maitre De"</img>
    </div> 
  
    <div className="about-text-box">
      <p>
        <h2>Welcome to Pookie's Paws Dog Cafe!</h2><br></br>
        Step into a world where the charm of yesteryear meets 
        the boundless joy of canine companionship.
        At Pookie's Paws Dog Cafe we're delighted to offer you an 
        experience that goes beyond the ordinary - a haven 
        for dog lovers, where every visit is a celebration 
        of friendship and nostalgia.
      </p>
    </div>
  </div>

  <div className="lobby" id="lobby">
    <div className="lobby-text-box">
      <p>
        <h2><a href="#">Steps into the Paws Lobby"</a></h2><br></br>
         Where you will be greeted by a gallery of cute adorable 
         pups to choose from for your playtime companion. 
         Each dog has a unique story, personality, and a heart full of love to share.</p> 
      <p>
        Reserve a slot to frolic and play with our lovable shelter dogs. Whether it's a 
        quick game of fetch or a leisurely stroll, these playful companions are ready 
        to make your visit memorable.
      </p>
    </div>

    <div className="lobby-image">
      <a href="#">
        <img src="Asset/Bus.png" alt="Bus"></img>
      </a>
    </div> 
  </div>

  <div className="dogs"id="dogs" >
    <div className="dogs-image">
      <a href="#">
        <img src="Asset/4heads.png" alt="Headshots"></img>
      </a>
    </div> 
  
    <div className="dogs-text-box">
      <p>
        <h2><a href="#">Visit the Dogs Gallery</a></h2><br></br>
        And get to know your favorite pups more intimately.
        Explore their profiles, browse through heartwarming photos, and discover the 
        special qualities that make each pup one-of-a-kind.</p>
        <p>
        Whether you're drawn to a playful spirit, a gentle soul, or a furry friend 
        with a heart-melting gaze, our shelter dogs are waiting to capture your heart.
      </p>
    </div>
  </div>
</div>

        
        
        </>
       
        )
}