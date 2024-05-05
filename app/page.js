import Pointer from "@/components/Pointer/Pointer";
import Icon from "@/components/Icon/Icon";

export default function Home() {
  return (
    <>
      <section className="landing">
        <div className="landingContainer">

          <div className="leftLanding">
            <div className="rating">
              <img width={"80px"} src="./star.png" alt="" />
              <span>Trusted by creators from all over the globe.</span>
            </div>
            <div className="heroTitle">
              <span>Fund your</span>
              <span>Creative Work</span>
            </div>
            <p>Get funded by your fans & followers. Empower to make difference
              together. Start Now. </p>
            <div className="buttons">
              <button className="whiteBtn">Get started</button>
              <button className="blackBtn" >Read more</button>
            </div>
          </div>

          <div className="rightLanding">
            <div className="screen">
              {/* design carousel */}
            </div>
          </div>

        </div>
      </section>
      <section className="features">
        <div className="featuresContainer">
          <div className="featuresUpper">
            <h1 className="featuresH1">Your Fans can buy you a CHAI..</h1>
            <div className="animatedGifs">

              <Icon src = "/man.gif" content = "Fans want to help" />
              <Icon src = "/coin.gif" content = "Fans want to help" />
              <Icon src = "/group.gif" content = "Fans want to help" />

            </div>
          </div>
          <div className="line"></div>
          <div className="featuresLower">

            <div className="pointers">
              <Pointer content="We don't call them &quot;customers&quot; or transactions. They are your supporters." />
              <Pointer content="You get paid instantly to your bank account. No more 30-day delays." />
            </div>

            <div className="pointers">
              <Pointer content="You have 100% ownership of your supporters. We never email them, and you can export the list any time you like." />
              <Pointer content="Receive fan support safely without disclosing your identity or address. We’ll do the heavy-lifting." />
            </div>

          </div>
        </div>
      </section>
      <section className="endPage">EndPage</section>
    </>
  );
}