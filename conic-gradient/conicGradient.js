const numberOfLines = 360;
const d = 500;

const getColorValuesFromString = (color) => {
    return color.replace('rgb(', '').replace(')', '').replace(' ', '').split(',').map(function(item) {
        return parseInt(item, 10);
    });
}

const nextStep = (startValue, stopValue, iterator) => {
    const stepSize = (Math.abs(startValue - stopValue) / numberOfLines) * iterator;
    if (startValue < stopValue) {
        return startValue + stepSize;
    }
    return startValue - stepSize;
}

class conicGradientPainter {
    // Typed OM
    static get inputProperties() {
        return ['--gradientStart', '--gradientStop'];
    }

    paint(ctx, geom, props) {
        const startColor = props.get('--gradientStart').toString();
        const stopColor = props.get('--gradientStop').toString();

        const startColorValues = getColorValuesFromString(startColor);
        const stopColorValues = getColorValuesFromString(stopColor);

        ctx.translate(d/2, d/2);
        ctx.rotate(Math.PI);
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';

        for(var i=0; i<=numberOfLines; i++) {
            ctx.save();
            
            ctx.rotate(Math.PI * i/180);
            ctx.translate(-ctx.lineWidth/2, ctx.lineWidth/2);
            
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.strokeStyle = `rgb(${nextStep(startColorValues[0], stopColorValues[0], i)},${nextStep(startColorValues[1], stopColorValues[1], i)},${nextStep(startColorValues[2], stopColorValues[2], i)})`;
            
            ctx.lineTo(0, d);
            ctx.stroke();
            ctx.closePath();
            
            ctx.restore();
        }
    }
}

registerPaint('conicGradient', conicGradientPainter);