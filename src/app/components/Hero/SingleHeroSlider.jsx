import TextModifier from "react-text-modifier";


const SingleHeroSlider = ({ slider = {} }) => {
    const { bg, title, btn } = slider;

    return (
        <>
            <div className="image-layer" style={{
                background: `url(${bg})`
            }}></div>
            <div className="absolute top-1/2 -translate-y-1/2 text-center w-full text-white main-slider__details" >
                <TextModifier text={title} as="h1" renderSeparator={() => <div className="mt-1 md:mt-4" />} className="font-bold text-xl md:text-xl lg:text-xl" highlight={["Paragon", "Design", "Construction"]} highlightClassName="text-4xl md:text-5xl lg:text-6xl text-orange-500 uppercase" />
                <div className="btn btn-active btn-neutral mt-2 text-white">Contact Us</div>
            </div>
        </>
    );
};

export default SingleHeroSlider;