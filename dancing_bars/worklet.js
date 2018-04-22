class DancingBarsPainter {
    paint(ctx, geom, props) {
        const bars = 10;
        const lineWidth = geom.width / bars;
        
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = 'green';

        for (let i = 0; i < bars; i++) {
            const xPosition = (lineWidth * i) + (lineWidth / 2);

            ctx.beginPath();
            ctx.moveTo(xPosition, geom.height);
            ctx.lineTo(xPosition, geom.height - (geom.height * Math.random()));
            ctx.stroke();
        }
    }
}

registerPaint('dancing-bars', DancingBarsPainter);














// Typed OM
// static get inputProperties() {
//     return ['--bar-color'];
// }


// ctx.strokeStyle = props.get('--bar-color');