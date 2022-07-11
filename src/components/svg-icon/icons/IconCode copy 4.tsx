const SVG = ({
    width = 24,
    height = 24,
    color = false
}) => (
    <svg
        width={`${width}px`}
        height={`${height}px`}
        fill="currentColor"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={color ? 'color-primary' : ''}
    >
        <path d="M71.68213,97.21875,34.74463,128l36.9375,30.78125a12,12,0,0,1-15.36426,18.4375l-48-40a12.00005,12.00005,0,0,1,0-18.4375l48-40a12,12,0,1,1,15.36426,18.4375Zm176,21.5625-48-40a12,12,0,1,0-15.36426,18.4375L221.25537,128l-36.9375,30.78125a12,12,0,0,0,15.36426,18.4375l48-40a12.00005,12.00005,0,0,0,0-18.4375ZM164.10107,28.72266a12.0021,12.0021,0,0,0-15.37841,7.17675l-64,176a11.99972,11.99972,0,1,0,22.55468,8.20118l64-176A11.99923,11.99923,0,0,0,164.10107,28.72266Z" />
    </svg>
);

export default SVG;