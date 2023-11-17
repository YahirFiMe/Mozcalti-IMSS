

export default function SVG({icon, width, height}) {

    return(
        <>
            <svg width={width} height={height}>
                <image xlinkHref={icon} />
            </svg>
        </>
    )
}
