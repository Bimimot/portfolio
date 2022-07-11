const SVG = ({
    size = 24,
    color = false
}) => (
    <svg
        width={`${size}px`}
        fill="currentColor"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={color ? 'color-primary' : ''}
    >
        <path d="M229.98584,66.3252a12.00325,12.00325,0,0,0-19.53857-3.80176l-37.42041,37.4209-14.14258-2.82911-2.82862-14.1416,37.4209-37.4209a12.00113,12.00113,0,0,0-3.80224-19.53808A76.0224,76.0224,0,0,0,89.25195,123.792L31.18506,173.94824q-.33105.28564-.64111.59571a36.00013,36.00013,0,0,0,50.91162,50.9121q.30981-.30908.59668-.6416L132.20654,166.749A76.0241,76.0241,0,0,0,229.98584,66.3252Zm-33.21631,66.44433A52.236,52.236,0,0,1,135.0918,141.666a11.99985,11.99985,0,0,0-15.1167,2.52832L64.22461,208.73828a12.00007,12.00007,0,0,1-16.96289-16.96289l64.542-55.75a11.99963,11.99963,0,0,0,2.65772-14.88672,52.06666,52.06666,0,0,1,46.65869-77.1709L134.544,70.544a12.00113,12.00113,0,0,0-3.28174,10.83886l5.65722,28.28418a12.00067,12.00067,0,0,0,9.41358,9.41309l28.28418,5.65722a11.98411,11.98411,0,0,0,10.83886-3.28125l26.57618-26.57617A51.81783,51.81783,0,0,1,196.76953,132.76953Z" />
    </svg>
);

export default SVG;
