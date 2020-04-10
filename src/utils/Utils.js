const getRandomColor = () => {
    return '#' + parseInt(Math.random() * 0xffffff).toString(16);
}



export default {
    getRandomColor
}