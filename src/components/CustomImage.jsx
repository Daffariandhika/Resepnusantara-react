// This is a functional component named CustomImage which takes two props, imgSrc and pt.
export default function CustomImage({imgSrc, pt}){
    // The function returns a JSX element that consists of a div container with the class "custom-image"
    return (
        // Inside the div container, there is an img element with the src attribute set to the value of imgSrc.
            // and an inline style that sets the padding top of the container based on the value of pt.
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={imgSrc} alt="" />
        </div>
    )
}