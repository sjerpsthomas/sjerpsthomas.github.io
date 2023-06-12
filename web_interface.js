let has_rotation = false
let rotation_degrees = 0.0


addEventListener('deviceorientation', ({ beta, gamma }) => {
    if (typeof beta !== 'number')
        return
    
    // set supported flag
	has_rotation = true

    let res = beta;
    
    // correct for gamma
    if (gamma < 0)
        res = 360 - ((360 - res) % 360);
    else
        res = 180 - res

    // correct for upside-down orientation
    if (res > 90 && res < 270)
        res -= 180;
    else if (res > 270)
        res -= 360;

    rotation_degrees = res
});


async function share(title, text, url) {
    // get screenshot from canvas
    const canvas = document.getElementById('canvas');
    const content = await fetch(canvas.toDataURL());
    const blob = await content.blob();

    // get blob as file
    const file = new File(
        [blob],
        'gameover.png',
        {
            type: blob.type,
            lastModified: new Date().getTime()
        }
    );

    // share with specified values
    navigator.share({
        title: title,
        text: text,
        url: url,

        files: [file],
    });
}