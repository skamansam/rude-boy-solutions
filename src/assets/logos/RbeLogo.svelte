<script>
    export let color = "#ccc";
    export let backgroundColor = "rgb(31, 32, 35)";
    let clazz = "";
    export { clazz as class };
</script>

<svg
    class="rbe-logo {clazz}"
    style="--background-color: {backgroundColor}; --draw-color: {color};"
    width="300"
    height="300"
    viewbox="0 0 100 100"
>
    <line class="outside-box" x1="0" y1="50" x2="100" y2="50" />
    <line class="outside-box" x1="50" y1="0" x2="50" y2="100" />

    <g class=" outside-box">
        <rect
            class="outside-box-tl"
            x="15"
            y="15"
            width="35"
            height="35"
            rx="0"
        />
        <rect
            class="outside-box-tr"
            x="50"
            y="15"
            width="35"
            height="35"
            rx="0"
            fill="none"
        />
        <rect
            class="outside-box-bl"
            x="15"
            y="50"
            width="35"
            height="35"
            rx="0"
            fill="none"
        />
        <rect
            class="outside-box-br"
            x="50"
            y="50"
            width="35"
            height="35"
            rx="0"
        />
        <g class="inside-box">
            <rect
                class="intside-box-tl"
                x="30"
                y="30"
                width="20"
                height="20"
                rx="0"
                fill="var(--background-color)"
            />
            <rect
                class="outside-box-tr"
                x="50"
                y="30"
                width="20"
                height="20"
                rx="0"
            />
            <rect
                class="outside-box-bl"
                x="30"
                y="50"
                width="20"
                height="20"
                rx="0"
            />
            <rect
                class="outside-box-br"
                x="50"
                y="50"
                width="20"
                height="20"
                rx="0"
                fill="var(--background-color)"
            />
            <g class="inside-circle">
                <circle cx="50" cy="50" r="10" fill="var(--background-color)" />
                <path
                    id="path615"
                    fill-rule="evenodd"
                    fill="blue"
                    stroke="blue"
                    d="m 50 44 l -2.8792 7.0425 l 4.0309 -1.3729 l -1.4175 5.271 l 3.012 -6.4669 l -4.2964 1.3286 l 3.1005 -5.8466 l -1.5503 0.0442 z m -1.0875 10.3125 l 0.3544 2.1705 l 1.5503 -1.8161 l -1.1074 0.2659 l -0.7973 -0.6202 z"
                />
                <path
                    id="path617"
                    fill-rule="evenodd"
                    d="m316.57 434.56l9.45 57.88 41.34-48.43-29.53 7.09-21.26-16.54z"
                />
            </g>
        </g>
    </g>
</svg>

<style>
    .rbe-logo {
        /* --background-color: {backgroundColor};
        --draw-color: {color}; */
        display: block;
        margin: auto;
        /*   height: 100vh; */
        aspect-ratio: 1;
        background-color: var(--background-color);
        stroke: var(--draw-color);
        stroke-width: 2px;
        fill: var(--draw-color);
    }

    .inside-circle {
    }
    /* .rbe-logo .rotation {
        perspective: 10240px;
        transform-style: preserve-3d;
        transform-origin: center center;
    } */
    .rbe-logo:hover .inside-box {
        perspective: 600px;
        transform-style: preserve-3d;
        transform-origin: center center;
        animation: spin 3s linear 1.5s 4;
    }
    .rbe-logo:hover .outside-box {
        perspective: 600px;
        transform-style: preserve-3d;
        transform-origin: center center;
        animation: spin 4.5s linear 3s 1;
    }
    .rbe-logo:hover .inside-circle {
        perspective: 600px;
        transform-style: preserve-3d;
        transform-origin: center center;
        animation: spin 1.5s linear 0s 8;
    }
    @keyframes spin {
        from {
            transform: rotate3d(0);
        }
        to {
            transform: rotate3d(0, 1, 0, 360deg);
        }
    }
</style>
