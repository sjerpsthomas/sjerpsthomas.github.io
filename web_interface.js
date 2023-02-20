let has_rotation = false
let rotation_degrees = 0.0


addEventListener('deviceorientation', ({ beta, gamma }) => {
    if (beta == null)
        return
    
    // set supported flag
	has_rotation = true
    
    gamma += 90

    beta += 180

    if (gamma < 90) {
        beta = (180 - beta + 720) % 360
    }

    beta = 360 - beta

    if (beta > 90 && beta < 270) {
        beta -= 180
    }
    else if (beta > 270) {
        beta -= 360
    }

    rotation_degrees = beta
});


function share_temp() {
    navigator.share({
        title: "title",
        text: "text",
        url: "url"
    })
}
