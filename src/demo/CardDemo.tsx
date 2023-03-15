import PageHeader from "../common/PageHeader";
import DemoPageHeader from "../common/DemoPageHeader";
import {MSCardInfo} from "../common/ComponentInfo";
import {MSCard} from "../components/MSCard";
import PageFooter from "../common/PageFooter";

export const CardDemo = () => {

    const card1title = "New York"
    const card1description = "Come to see the Big Apple! The most famous city in the world! You are not going to forget this amazing experience"
    const card1link = "/someLink1"

    const card2title = "Earth"
    const card2description = "The planet where we live in! Our planet must be saved! Let's save the world!"
    const card2link = "/someLink2"

    const card3title = "Pasta"
    const card3description = "Wanna try one of the most beloved foods in the world? Don't hesitate to try this delicious Italian food!"
    const card3link = "/someLink3"

    const card4title = "Hamburger"
    const card4description = "The American Classic! This is widely appreciated all over the world. It versatility impress everyone and make this kind able to please everybody."
    const card4link = "/someLink4"

    const card5title = "Taco"
    const card5description = "The Mexican famous food! The explosion of the taste inside the mouth. Impossible not to get happy!"
    const card5link = "/someLink5"

    return (
        <div>
            <DemoPageHeader
                componentName={MSCardInfo.componentName}
                componentDescription={MSCardInfo.componentDescription}
                componentPropsNames={MSCardInfo.propsNames}
                componentPropsDescription={MSCardInfo.propsDescriptions}
            />

            <h6>1 - A card with the default behavior:</h6>
            <MSCard title={card1title} description={card1description} link={card1link}/>
            <br/><br/>
            <h6>2 - Another example of the card:</h6>
            <MSCard title={card2title} description={card2description} link={card2link}/>
            <br/><br/>
            <h6>3 - An example of the card in a three-column arrangement:</h6>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <MSCard title={card3title} description={card3description} link={card3link}/>
                <MSCard title={card4title} description={card4description} link={card4link}/>
                <MSCard title={card5title} description={card5description} link={card5link}/>
            </div>
        </div>
    )
}