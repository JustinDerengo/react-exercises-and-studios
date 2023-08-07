export default function HobbyLinks() {
    const hobbyLinks = ["https://home.privateerpress.com/", "https://store.steampowered.com/", "https://www.stewmac.com/"]
    return (
        <div>
            <h3>My Hobbies</h3>
            <a href = {hobbyLinks[0]}>Painting miniature figures</a><br></br>
            <a href = {hobbyLinks[1]}>Computer gaming</a><br></br>
            <a href = {hobbyLinks[2]}>Building guitars and other instruments</a><br></br>
        </div>
    )
}