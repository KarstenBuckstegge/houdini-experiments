class PlaceholderBoxPainter {
    // Typed OM
    static get inputProperties() {
        return ['--bar-color'];
    }

    paint(ctx, geom, props) {
        console.log('geom', geom);
        console.log('props', props);
        const bars = 10;
        const lineWidth = geom.width / bars;
        
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = props.get('--bar-color');

        for (let i = 0; i < bars; i++) {
            const xPosition = (lineWidth * i) + (lineWidth / 2);

            ctx.beginPath();
            ctx.moveTo(xPosition, geom.height);
            ctx.lineTo(xPosition, geom.height - (geom.height * Math.random()));
            ctx.stroke();
        }
    }
}

registerPaint('placeholder-box', PlaceholderBoxPainter);