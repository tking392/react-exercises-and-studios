export default function HobbyLinks () {
    let hobbyLinks = ['https://www.dndbeyond.com/', 'https://www.trueachievements.com/', 'https://www.viz.com/shonenjump', 'https://rateyourmusic.com/'];
    return <div>
        <h3>My Hobbies</h3>
        <a href = {hobbyLinks[0]}>D&D Beyond</a>
        <a href = {hobbyLinks[1]}>TrueAchievements</a>
        <a href = {hobbyLinks[2]}>Shonen Jump</a>
        <a href = {hobbyLinks[3]}>Rate Your Music</a>
    </div>
}